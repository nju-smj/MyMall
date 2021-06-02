<template v-if='list.length'>
  <div class="goodslist">
    <goods-list-item v-for="(item,index) in list" :key="index" :item-data='item'/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'MyMallGoodslist',
  props:{
    list:{
      type: Array,
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
}
</style>