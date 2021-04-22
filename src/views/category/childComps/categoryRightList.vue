<template>
  <div class="category-right-list">
    <category-right-top :topItems="goodsList.top"></category-right-top>
    <tab-control
      :lists="['流行', '新款', '精品']"
      @goodsClick="doGoodsClick" 
      class="category-tab-control"
    ></tab-control>
    <goods-list :goods-list="goodsList[numToStr(subCurIndex)]"></goods-list>
  </div>
</template>

<script>
import CategoryRightTop from "./categoryRightTop";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

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
  },
};
</script>

<style scoped>
/* .category-right-list{
  position: relative;
} */
.category-tab-control{
  position: sticky;
  top: 44px;
}
</style>