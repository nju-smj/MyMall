<template>
  <div class="category">
    <category-nav-bar class="category-nav"></category-nav-bar>
    <div class="category-middle">
      <better-scroll :probeType="3" ref="categoryBs" class="category-bs">
        <category-left-cards
          :types="allTypes"
          @typeItemClick="doTypeItemClick"
          :curIndex="parseInt(curIndex)"
        ></category-left-cards>
      </better-scroll>
      <better-scroll :probeType="3" class="category-bs-2 category-middle-right" ref="categoryBs2" @nowScroll="doNowScroll">
        <category-right-list :goods-list='rightGoods' ></category-right-list>
      </better-scroll>
    </div>
  </div>
</template>

<script>
import BetterScroll from "components/common/BetterScroll/BetterScroll";

import CategoryNavBar from "./childComps/categoryNavBar";
import CategoryLeftCards from "./childComps/categoryLeftCards";
import CategoryRightList from "./childComps/categoryRightList";

import { getTypes, getGoodsByKey, getSubTypeDetail } from "network/category";
export default {
  name: "MymallCategory",
  data() {
    return {
      allTypes: [],
      curIndex: 0,
      subCurIndex: 0,
      rightGoods: { top: [], new: [], sell: [], pop: [] },
    };
  },
  components: {
    CategoryNavBar,
    CategoryLeftCards,
    BetterScroll,
    CategoryRightList,
  },
  created() {
    //获取所有子分类
    getTypes()
      .then((res) => {
        this.allTypes = res.data.category.list;
        console.log(this.allTypes);
        console.log("---------");
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
        console.log(this.rightGoods);
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
    },
    doNowScroll(){
      this.$refs.categoryBs2.refresh();
    }
  },
};
</script>

<style scoped>
.category {
  height: 100vh;
  width: 100vw;
}
.category-nav {
  background-color: var(--color-tint);
  color: white;
}
.category-bs {
  height: 100%;
  overflow: hidden;
}
.category-bs-2{
  height: 100%;
}
.category-middle{
  display: flex;
  height: calc(100% - 44px - 49px);
}
.category-middle-right{
  flex: 1;
  height: 100%;
  overflow: hidden;
}
</style>