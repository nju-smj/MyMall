<template>
  <div class="category-right-list">
    <category-right-top :topItems="goodsList.top" @topRightLoad='doTopRightLoad'></category-right-top>
    <tab-control
      :list="['流行', '新款', '精品']"
      @tabClick="doGoodsClick" 
      class="category-tab-control"
      ref="categoryRLTab"
    ></tab-control>
    <goods-list :list="goodsList[numToStr(subCurIndex)]"></goods-list>
  </div>
</template>

<script>
import CategoryRightTop from "./categoryRightTop";
import TabControl from "components/content/TabControl";
import GoodsList from "components/content/GoodsList";

export default {
  name: "MymallCategoryrightlist",
  props: {
    goodsList: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      subCurIndex: 0,
    };
  },
  components: {
    CategoryRightTop,
    TabControl,
    GoodsList,
  },
  methods: {
    doGoodsClick(index) {
      this.subCurIndex = index;
      this.$emit('firstTabClick', index);
    },
    numToStr(index) {
      switch (index) {
        case 0:
          return "pop";
          break;
        case 1:
          return "new";
          break;
        case 2:
          return "sell";
          break;
      }
    },
    doTopRightLoad(){
      this.$emit('topRightImgLoad');
    }
  },
};
</script>

<style scoped>
</style>