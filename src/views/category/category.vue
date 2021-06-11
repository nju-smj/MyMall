<template>
  <div class="category">
    <category-nav-bar class="category-nav"></category-nav-bar>
    <div class="category-middle">
      <scroll :probeType="2" ref="categoryBs" class="category-bs">
        <category-left-cards
          :types="allTypes"
          @typeItemClick="doTypeItemClick"
          :curIndex="parseInt(curIndex)"
        ></category-left-cards>
      </scroll>
      <scroll
        :probeType="3"
        class="category-bs-2 category-middle-right"
        ref="categoryBs2"
        @bsScroll="doNowScroll"
      >
        <category-right-list
          :goods-list="rightGoods"
          @topRightImgLoad="doTRLoad"
          @firstTabClick="doFirTabClick"
          ref="categoryRL"
        ></category-right-list>
      </scroll>
    </div>
    <tab-control
      :list="['流行', '新款', '精品']"
      class="category-tab-control-2"
      v-show="isTab2Show"
      ref="categoryTab2"
      @tabClick="goodsClick"
    ></tab-control>
    <back-top v-show="isBackToTopShow" @click.native="backToTop"></back-top>
  </div>
</template>

<script>
import Scroll from "components/common/Scroll/Scroll";

import TabControl from "components/content/TabControl";

import CategoryNavBar from "./childComps/categoryNavBar";
import CategoryLeftCards from "./childComps/categoryLeftCards";
import CategoryRightList from "./childComps/categoryRightList";

import BackTop from "components/content/BackTop";
import { backtoTopMixin } from "common/mixin";

import { getTypes, getGoodsByKey, getSubTypeDetail } from "network/category";
import { throttle } from "common/tools";
export default {
  name: "MymallCategory",
  data() {
    return {
      allTypes: [],
      curIndex: 0,
      subCurIndex: 0,
      rightGoods: { top: [], new: [], sell: [], pop: [] },
      isTab2Show: false,
      firstTabPosY: 0,
      isBackToTopShow: false,
    };
  },
  components: {
    CategoryNavBar,
    CategoryLeftCards,
    Scroll,
    CategoryRightList,
    TabControl,
    BackTop,
  },
  created() {
    //获取所有子分类
    getTypes()
      .then((res) => {
        this.allTypes = res.data.category.list;
      })
      .then(() => {
        //获取第一个类的数据
        let needKey = this.allTypes[this.curIndex].maitKey;
        return getGoodsByKey(needKey);
      })
      .then((res) => {
        this.rightGoods.top = res.data.list;
        return Promise.all([
          getSubTypeDetail(this.allTypes[this.curIndex].miniWallkey, "new"),
          getSubTypeDetail(this.allTypes[this.curIndex].miniWallkey, "pop"),
          getSubTypeDetail(this.allTypes[this.curIndex].miniWallkey, "sell"),
        ]);
      })
      .then((res) => {
        this.rightGoods.new = res[0];
        this.rightGoods.pop = res[1];
        this.rightGoods.sell = res[2];
      });
  },
  methods: {
    doTypeItemClick(index) {
      if (this.curIndex != index) {
        this.curIndex = index;
        //根据按下item的不同请求不同的内容
        let needKey = this.allTypes[index].maitKey;
        getGoodsByKey(needKey)
          .then((res) => {
            this.rightGoods.top = res.data.list;
            return Promise.all([
              getSubTypeDetail(this.allTypes[this.curIndex].miniWallkey, "new"),
              getSubTypeDetail(this.allTypes[this.curIndex].miniWallkey, "pop"),
              getSubTypeDetail(
                this.allTypes[this.curIndex].miniWallkey,
                "sell"
              ),
            ]);
          })
          .then((res) => {
            this.rightGoods.new = res[0];
            this.rightGoods.pop = res[1];
            this.rightGoods.sell = res[2];
          });
      }
      this.firstTabPosY = this.$refs.categoryBs2.$el.querySelector(
        ".category-tab-control"
      ).offsetTop;
    },
    throttleRefresh() {
      return throttle(this.$refs.categoryBs2.refresh, 1000);
    },
    doNowScroll(pos) {
      this.throttleRefresh();
      this.isTab2Show = -pos.y >= this.firstTabPosY-44;
      this.isBackToTopShow = pos.y < -1000;
    },
    doTRLoad() {
      this.firstTabPosY = this.$refs.categoryBs2.$el.querySelector(
        ".category-tab-control"
      ).offsetTop;
    },
    doFirTabClick(index) {
      this.$refs.categoryTab2.currentIndex = index;
    },
    goodsClick(index) {
      this.$refs.categoryRL.$refs.categoryRLTab.currentIndex = index;
      this.$refs.categoryRL.subCurIndex = index;
    },
  },
  mixins: [backtoTopMixin],
};
</script>

<style scoped>
.category {
  height: 100vh;
  width: 100vw;
  position: relative;
}
.category-nav {
  background-color: var(--color-tint);
  color: white;
}
.category-bs {
  height: 100%;
  overflow: hidden;
}
.category-bs-2 {
  height: 100%;
}
.category-middle {
  display: flex;
  height: calc(100% - 44px - 49px);
}
.category-middle-right {
  flex: 1;
  height: 100%;
  overflow: hidden;
}
.category-tab-control-2 {
  position: absolute;
  top: 44px;
  left: 100px;
  right: 0px;
}
</style>