<template>
  <div class="category-left-cards">
    <div v-for="(item,index) in types" :key="index" class="type-item" :class="{'item-active': index==curIndex}" @touchend="doItemClick(index)">{{item.title}}</div>
  </div>
</template>

<script>
export default {
  name: 'MymallCategoryleftcards',
  props:{
    types:{
      type: Array,
      default(){
        return [];
      }
    },
    curIndex:{
      type: Number,
      default: 0
    }
  },
  methods:{
    doItemClick(index){
      this.$emit('typeItemClick', index);
    }
  }
};
</script>

<style scoped>
.category-left-cards{
  width: 100px;
}
.type-item{
  width: 100px;
  height: 50px;
  background-color: rgba(100, 100, 100, .1);
  line-height: 50px;
  text-align: center;
  border-bottom: 1px solid rgba(151, 150, 150, .5);
}
.item-active{
  background-color: white;
  border-left: 5px solid rgb(187, 145, 6);
}
</style>