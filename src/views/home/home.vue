<template>
  <div class="home">
    <home-nav class="homeNav"><div slot="middle">蘑菇街</div></home-nav>
    <better-scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @nowScroll="doNowScroll"
      @pullingUp="doPullingUp"
    >
      <home-swiper :banner="banner"></home-swiper>
      <home-recommend :recommends="recommend"></home-recommend>
      <home-feature></home-feature>
      <tab-control
        :lists="['流行', '精选', '新款']"
        @goodsClick="goodsClick"
      ></tab-control>
      <goods-list :goodsList="showItemGoods"></goods-list>
    </better-scroll>

    <back-top @click.native="backToTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
let HomeNav = () => import("components/common/Navbar/NavBar");
import BetterScroll from "components/common/BetterScroll/BetterScroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childComps/homeSwiper";
import HomeRecommend from "./childComps/homeRecommend";
import HomeFeature from "./childComps/homeFeature";

import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  name: "MymallHome",
  components: {
    HomeNav,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    BetterScroll,
    BackTop,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentItem: "pop",
      isShowBackTop: false,
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /**
     * 这里是普通事件
     */
    goodsClick(index) {
      switch (index) {
        case 0:
          this.currentItem = "pop";
          break;
        case 1:
          this.currentItem = "new";
          break;
        case 2:
          this.currentItem = "sell";
          break;
      }
    },
    doNowScroll(pos) {
      this.isShowBackTop = Math.abs(pos.y) > 800;
    },
    backToTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    doPullingUp() {
      console.log("loadmore");
      this.getHomeGoods(this.currentItem);
      this.$refs.scroll.BScroll.refresh();
    },
    /**
     * 这里是网络请求事件
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      let thisPage = this.goods[type].page + 1;
      getHomeGoods(type, thisPage).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page = thisPage;
        this.$refs.scroll.finishPullUp();
      });
    },
  },
  computed: {
    showItemGoods() {
      return this.goods[this.currentItem].list;
    },
  },
};
</script>

<style scoped>
.home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
  /* position: relative; */
}
.homeNav {
  background-color: var(--color-tint);
  color: white;
}
.home .content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  right: 0px;
}
</style>