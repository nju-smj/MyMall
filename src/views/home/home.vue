<template>
  <div class="home">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>蘑菇街</div>
      </template>
    </nav-bar>
    <tab-control
      :list="['流行', '新款', '精选']"
      class="tab-control-fake"
      @tabClick="doTabClick"
      v-show="isTabControlShow"
      ref="tabControlFake"
    ></tab-control>
    <scroll
      class="content-scroll"
      ref="homeScroll"
      :probe-type="3"
      :pullUpLoad="true"
      @bsScroll="doScroll"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        class="home-swiper"
        @swiperImgLoad="doSwiperImgLoad"
      ></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <feature-view />
      <tab-control
        :list="['流行', '新款', '精选']"
        @tabClick="doTabClick"
        ref="tabControl"
      ></tab-control>
      <goods-list :list="showedGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import { getHomePageAllData, getHomeGoods } from "network/home.js";
const NavBar = () => import("components/common/NavBar/NavBar.vue");
const HomeSwiper = () => import("./ChildComps/HomeSwiper");
const HomeRecommend = () => import("./ChildComps/HomeRecommend");
const FeatureView = () => import("./ChildComps/FeatureView");
const TabControl = () => import("components/content/TabControl.vue");
import GoodsList from "components/content/GoodsList.vue";
import Scroll from "components/common/Scroll/Scroll.vue";
import BackTop from "components/content/BackTop.vue";
import { debounce } from "common/tools";
export default {
  name: "MymallHome",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabControlTop: 0,
      isTabControlShow: false,
      saveY: 0
    };
  },
  computed: {
    showedGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    this.$bus.$on(
      "itemImgLoad",
      debounce(() => {
        this.$refs.homeScroll.refresh();
      }, 200)
    );
  },
  activated(){
    this.$refs.homeScroll.refresh();
    this.$refs.homeScroll.moveTo(0,this.saveY,0);
  },
  deactivated(){
    this.saveY=this.$refs.homeScroll.getSaveY();
  },
  methods: {
    getHomeMultidata() {
      getHomePageAllData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      let thisPage = this.goods[type].page + 1;
      getHomeGoods(type, thisPage).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page = thisPage;
        this.$refs.homeScroll.finishPullUp();
      });
    },
    doTabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControlFake.currentIndex=index;
      this.$refs.tabControl.currentIndex=index;
    },
    backClick() {
      this.$refs.homeScroll.moveTo(0, 0);
    },
    doScroll(pos) {
      this.isShowBackTop = pos.y < -1000 ? true : false;

      this.isTabControlShow = pos.y < -this.tabControlTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    doSwiperImgLoad() {
      this.tabControlTop = this.$refs.tabControl.$el.offsetTop;
    },
  },
};
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: white;
}
.content-scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
.tab-control-fake{
  position: relative;
  z-index: 10;
}
</style>