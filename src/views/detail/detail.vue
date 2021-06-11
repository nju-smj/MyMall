<template>
  <div id="detail">
    <detail-nav-bar class="detailNav" @navClick="doNavClick" ref="detailNav"></detail-nav-bar>
    <!-- <div>{{$store.state.cartList}}</div> -->
    <better-scroll class="datailBS" ref="scroll" @nowScroll='contentScroll' :probeType='3'>
      <detail-swiper :topImages="topSwiper"></detail-swiper>
      <detail-base-info :goodsInfo="goodsInfo"></detail-base-info>
      <detail-seller-info :sellerInfo="sellerInfo"></detail-seller-info>
      <detail-goods-detail
        :detailInfo="goodsDetail"
        @detailImageLoad="doDetailRefresh"
      ></detail-goods-detail>
      <detail-goods-sizes :goodsSize="goodsSize" ref="detail"></detail-goods-sizes>
      <detail-comment-info
        :comment-info="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <div class="detail-recommend" id="recommend">推荐</div>
      <goods-list :goodsList="recommend"></goods-list>
    </better-scroll>
    <detail-bottom-nav-bar class="bottomNav" @addToCart='doAddToCart'></detail-bottom-nav-bar>
    <back-top @click.native="backToTop" v-show="isShowBackTop"></back-top>
    <toast></toast>
  </div>
</template>

<script>
import Vue from 'vue'
import DetailNavBar from "./childComps/detailNavBar";
import DetailSwiper from "./childComps/detailSwpier";
import DetailBaseInfo from "./childComps/detailBaseInfo";
import DetailSellerInfo from "./childComps/detailSellerInfo";
import DetailGoodsDetail from "./childComps/detailGoodsDetail";
import DetailGoodsSizes from "./childComps/detailGoodsSizes";
import DetailCommentInfo from "./childComps/detailCommentInfo";
import DetailBottomNavBar from './childComps/detailBottomNavBar'

import GoodsList from "components/content/goods/GoodsList";
import Toast from 'components/content/toast/Toast'

import BetterScroll from "components/common/BetterScroll/BetterScroll";


import {
  getDetailById,
  GoodsBaseInfo,
  Seller,
  Sizes,
  getRecommend,
} from "network/detail.js";

import { itemListenerMixin,backtoTopMixin} from "common/mixin";
import { debounce } from 'common/tools'
import { mapActions } from 'vuex'
export default {
  name: "MymallDetail",
  data() {
    return {
      productId: "",
      topSwiper: [],
      goodsInfo: {},
      sellerInfo: {},
      goodsDetail: {},
      goodsSize: {},
      commentInfo: {},
      recommend: [],
      navItemYs: [],
      navItemsGetYsDebounce: null,
      currentIndex: 0,
    };
  },
  created() {
    this.navItemsGetYsDebounce=debounce(()=>{
      this.navItemYs = [];
      this.navItemYs.push(0);
      this.navItemYs.push(this.$refs.detail.$el.offsetTop-44);
      this.navItemYs.push(this.$refs.comment.$el.offsetTop);
      this.navItemYs.push(document.querySelector('#recommend').offsetTop);
      // console.log(this.navItemYs);
    },100);
    this.productId = this.$route.params.iid;
    getDetailById(this.productId).then((data) => {
      //顶部轮播图
      this.topSwiper = data.result.itemInfo.topImages;
      //商品信息
      this.goodsInfo = new GoodsBaseInfo(
        data.result.itemInfo,
        data.result.columns,
        data.result.shopInfo.services
      );
      //商家信息
      this.sellerInfo = new Seller(data.result.shopInfo);
      //商品详细信息
      this.goodsDetail = data.result.detailInfo;
      //商品规格信息
      this.goodsSize = new Sizes(data.result.itemParams);
      //评论信息(判断可能无评论/图片)
      let list=data.result.rate.cRate>0?data.result.rate.list[0]:{};
      if(Object.keys(list).length>0){
        if(!list.hasOwnProperty('images')){
          Vue.set(list, 'images', []);
        }
      }
      this.commentInfo={'num':data.result.rate.cRate,'list':list};
      // console.log(data);
      // console.log(this.commentInfo);
    });
    //获取推荐数据
    getRecommend().then((res) => {
      this.recommend = res.data.list;
      // console.log(this.recommend);
    });
  },
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
    DetailBottomNavBar,
    Toast
  },
  methods: {
    ...mapActions(['addToCart']),
    doDetailRefresh() {
      this.$refs.scroll.refresh();
      this.navItemsGetYsDebounce();
    },
    doNavClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.navItemYs[index], 500);
    },
    contentScroll(pos){
      let posY=pos.y;
      let length=this.navItemYs.length;
      // console.log(this.navItemYs+" "+posY);
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
      productMsg.iid=this.productId;
      // console.log(productMsg);
      this.addToCart(productMsg).then(value=>{
        this.$toast.show(value,1500);
      });
    }
  },
  mixins: [itemListenerMixin,backtoTopMixin],
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 4;
  background-color: #fff;
  height: 100vh;
}
.datailBS {
  height: calc(100% - 44px - 49px);
}
.detailNav {
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
.bottomNav{
  position: fixed;
  bottom: -1px;
}
</style>