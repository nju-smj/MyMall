<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @navClick="doNavClick" ref="detailNav"/>
    <better-scroll
      :probe-type="3"
      :pullUpLoad="true"
      ref="scroll"
      class="detail-scroll"
      @bsScroll='contentScroll'
    >
      <detail-swiper :topImages="topSwiper" :interval="2000"></detail-swiper>
      <detail-base-info :goodsInfo="goodsInfo"></detail-base-info>
      <detail-seller-info :sellerInfo="sellerInfo"></detail-seller-info>
      <detail-goods-detail
        :detailInfo="goodsDetail"
        @detailImageLoad="doDetailRefresh"
      ></detail-goods-detail>
      <detail-goods-sizes
        :goodsSize="goodsSize"
        ref="detail"
      ></detail-goods-sizes>
      <detail-comment-info
        :comment-info="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <div class="detail-recommend" id="recommend">推荐</div>
      <goods-list :list="recommend"></goods-list>
      <div class="detail-bottom">已经到底了！ ~QAQ~</div>
    </better-scroll>
    <detail-bottom-nav-bar class="bottomNav" @addToCart='doAddToCart'></detail-bottom-nav-bar>
    <back-top @click.native="backToTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
/*
详情页里面的goodslistitem不能跳转 没有数据
*/
import DetailNavBar from "./childComps/detailNavBar";
import DetailSwiper from "./childComps/detailSwiper";
import DetailBaseInfo from "./childComps/detailBaseInfo";
import DetailSellerInfo from "./childComps/detailSellerInfo";
import BetterScroll from "components/common/Scroll/Scroll";
import DetailGoodsDetail from "./childComps/detailGoodsDetail";
import DetailGoodsSizes from "./childComps/detailGoodsSizes";
import DetailCommentInfo from "./childComps/detailCommentInfo";
import GoodsList from "components/content/GoodsList";
import DetailBottomNavBar from './childComps/detailBottomNavBar.vue'
import { debounce } from "common/tools";
import { itemListenerMixin,backtoTopMixin} from "common/mixin";
import Vue from "vue";
import { mapActions } from 'vuex'
import {
  getDetailById,
  GoodsBaseInfo,
  Seller,
  Sizes,
  getRecommend,
} from "network/detail.js";
export default {
  name: "detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailSellerInfo,
    BetterScroll,
    DetailGoodsDetail,
    DetailGoodsSizes,
    DetailCommentInfo,
    GoodsList,
    DetailBottomNavBar
  },
  data() {
    return {
      id: "",
      topSwiper: [],
      goodsInfo: {},
      sellerInfo: {},
      goodsDetail: {},
      goodsSize: {},
      commentInfo: {},
      recommend: [],
      navItemYs: [],
      navItemsGetYsDebounce: null,
      currentIndex: 0 
    };
  },
  created() {
    this.navItemsGetYsDebounce = debounce(() => {
      this.navItemYs = [];
      this.navItemYs.push(0);
      this.navItemYs.push(this.$refs.detail.$el.offsetTop - 44);
      this.navItemYs.push(this.$refs.comment.$el.offsetTop);
      this.navItemYs.push(document.querySelector("#recommend").offsetTop);
    }, 100);

    this.id = this.$route.query.id;

    getDetailById(this.id).then((data) => {
      this.topSwiper = data.result.itemInfo.topImages;
      this.goodsInfo = new GoodsBaseInfo(
        data.result.itemInfo,
        data.result.columns,
        data.result.shopInfo.services
      );
      this.sellerInfo = new Seller(data.result.shopInfo);
      this.goodsDetail = data.result.detailInfo;
      this.goodsSize = new Sizes(data.result.itemParams);
      //评论信息(判断可能无评论/图片)
      let list = data.result.rate.cRate > 0 ? data.result.rate.list[0] : {};
      if (Object.keys(list).length > 0) {
        if (!list.hasOwnProperty("images")) {
          Vue.set(list, "images", []);
        }
      }
      this.commentInfo = { num: data.result.rate.cRate, list: list };
    });
    getRecommend().then((res) => {
      this.recommend = res.data.list;
    });
  },
  destroyed(){
    this.$bus.$off("itemImgLoad",this.itemImgListener);
  },
  watch: {},
  computed: {},
  methods: {
    ...mapActions(['addToCart']),
    doDetailRefresh() {
      this.$refs.scroll.refresh();
      this.navItemsGetYsDebounce();
    },
    doNavClick(index){
      this.$refs.scroll.moveTo(0, -this.navItemYs[index], 500);
    },
    contentScroll(pos){
      let posY=pos.y;
      let length=this.navItemYs.length;
      for(let index in this.navItemYs){
        index=parseInt(index);
        if((this.currentIndex!=index)&&(index<length-1 && posY<=-this.navItemYs[index] && posY>-this.navItemYs[index+1]) || (index==length-1&&posY<=-this.navItemYs[index])){
          this.currentIndex=index;
          this.$refs.detailNav.curIndex=this.currentIndex;
        }
      }
      this.isShowBackTop = Math.abs(pos.y) > 800;
    },
    doAddToCart(){
      let productMsg={};
      productMsg.desc=this.goodsInfo.desc;
      productMsg.img=this.topSwiper[0];
      productMsg.title=this.goodsInfo.title;
      productMsg.price=this.goodsInfo.realPrice;
      productMsg.iid=this.id;
      this.addToCart(productMsg).then(res=>{
         this.$toast.show(res,1500);
      });
    }
  },
  mixins: [itemListenerMixin,backtoTopMixin]
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: white;
  height: 100vh;
  width: 100vw;
}
.detail-scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  widows: 100vw;
  overflow: hidden;
}
.detail-nav {
  position: relative;
  z-index: 4;
  background-color: #fff;
}
.detail-recommend {
  margin: 0px 30px 15px 30px;
  font-size: 18px;
  font-weight: bold;
  line-height: 30px;
  border-top: 3px solid rgba(100, 100, 100, 0.1);
  height: 30px;
  padding: 6px 0px;
}
.detail-bottom {
  text-align: center;
  font-size: 16px;
  margin: 10px 0px;
}
.bottomNav{
  position: fixed;
  bottom: -1px;
}
</style>