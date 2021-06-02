<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
    <better-scroll
      :probe-type="3"
      :pullUpLoad="true"
      ref="detailScroll"
      class="detail-scroll"
    >
      <detail-swiper :topImages="topSwiper"></detail-swiper>
      <detail-base-info :goodsInfo="goodsInfo"></detail-base-info>
      <detail-seller-info :sellerInfo="sellerInfo"></detail-seller-info>
      <detail-goods-detail
        :detailInfo="goodsDetail"
        @detailImageLoad="doDetailRefresh"
      ></detail-goods-detail>
      <detail-goods-sizes :goodsSize="goodsSize" ref="detail"></detail-goods-sizes>
    </better-scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/detailNavBar";
import DetailSwiper from "./childComps/detailSwiper";
import DetailBaseInfo from "./childComps/detailBaseInfo";
import DetailSellerInfo from "./childComps/detailSellerInfo";
import BetterScroll from "components/common/Scroll/Scroll";
import DetailGoodsDetail from "./childComps/detailGoodsDetail";
import DetailGoodsSizes from "./childComps/detailGoodsSizes";
import { debounce } from "common/tools";
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
    DetailGoodsSizes
  },
  data() {
    return {
      id: "",
      topSwiper: [],
      goodsInfo: {},
      sellerInfo: {},
      goodsDetail: {},
      goodsSize: {},
      navItemYs: [],
      navItemsGetYsDebounce: null,
    };
  },
  created() {
    this.navItemsGetYsDebounce = debounce(() => {
      this.navItemYs = [];
      this.navItemYs.push(0);
      this.navItemYs.push(this.$refs.detail.$el.offsetTop - 44);
      this.navItemYs.push(this.$refs.comment.$el.offsetTop);
      this.navItemYs.push(document.querySelector("#recommend").offsetTop);
      // console.log(this.navItemYs);
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
    });
  },
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    doDetailRefresh() {
      this.$refs.detailScroll.refresh();
      // this.navItemsGetYsDebounce();
    },
  },
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: white;
  height: 100vh;
}
.detail-scroll {
  position: absolute;
  top: 44px;
  bottom: 0px;
}
.detail-nav {
  position: relative;
  z-index: 4;
  background-color: #fff;
}
</style>