<template>
  <div class="goodslist">
    <goods-list-item v-for="(item,index) in goodsList" :item-msg='item' :key="index"></goods-list-item>
  </div>
</template>

<script>
let GoodsListItem=()=>import('components/content/goods/GoodsListItem')
export default {
  name: 'MymallGoodslist',
  props:{
    goodsList:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  components:{
    GoodsListItem
  }
};
</script>

<style scoped>
.goodslist{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  /* z-index: -1; */
}
</style>