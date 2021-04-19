<template>
  <div class="home">
    <home-nav class="homeNav"><div slot="middle">蘑菇街</div></home-nav>
    <tab-control
      :lists="['流行', '新款', '精品']"
      @goodsClick="goodsClick"
      ref="tabControl1"
      class="firstTabControl"
      v-show="isFirstTabShow"
    ></tab-control>
    <better-scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @nowScroll="doNowScroll"
      @pullingUp="doPullingUp"
    >
      <home-swiper :banner="banner" @imageHasLoaded="doImageLoad"></home-swiper>
      <home-recommend :recommends="recommend"></home-recommend>
      <home-feature></home-feature>
      <tab-control
        :lists="['流行', '新款', '精品']"
        @goodsClick="goodsClick"
        ref="tabControl2"
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

import HomeSwiper from "./childComps/homeSwiper";
import HomeRecommend from "./childComps/homeRecommend";
import HomeFeature from "./childComps/homeFeature";

import { getHomeMultidata, getHomeGoods } from "network/home.js";

import { debounce } from "common/tools";
import { itemListenerMixin, backtoTopMixin } from "common/mixin";
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
      isFirstTabShow: false,
      tabOffSetTop: 0,
      leavePosY: 0,
    };
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mixins: [itemListenerMixin, backtoTopMixin],
  mounted() {},
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.leavePosY, 0);
  },
  deactivated() {
    this.leavePosY = this.$refs.scroll.getPosY();
    // console.log(this.leavePosY);
  },
  methods: {
    /**
     * 这里是普通事件
     */
    doImageLoad() {
      this.tabOffSetTop = this.$refs.tabControl2.$el.offsetTop;
    },
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
      this.$refs.tabControl1.curIndex = index;
      this.$refs.tabControl2.curIndex = index;
    },
    doNowScroll(pos) {
      //判断回到顶部按钮是否显示
      this.isShowBackTop = Math.abs(pos.y) > 800;
      //判断第一个tabbar是否显示
      this.isFirstTabShow = Math.abs(pos.y) > this.tabOffSetTop;
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
      const reqData = debounce(() => {
        let thisPage = this.goods[type].page + 1;
        getHomeGoods(type, thisPage).then((res) => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page = thisPage;
          this.$refs.scroll.finishPullUp();
        });
      }, 500);
      reqData();
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
.firstTabControl {
  position: relative;
  z-index: 2;
}
</style>