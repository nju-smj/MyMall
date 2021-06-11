<template>
  <div class="category-right-top">
    <div v-for="(item,index) in topItems" :key="index">
      <div class="RT-item">
        <a :href="item.link"><img :src="item.image" @load="doLoad"></a>
        <div>{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MymallCategoryrighttop',
  props:{
    topItems:{
      type: Array,
      default:[]
    }
  },
  methods:{
    doLoad(){
      this.$emit('topRightLoad');
    }
  }
};
</script>

<style scoped>
.category-right-top{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  padding-top: 10px;
}
.RT-item{
  width: 100px;
}
.RT-item a{
  display: block;
  width: 80px;
  height: 80px;
  margin: auto;
}
.RT-item img{
  width: 100%;
  height: 100%;
}
.RT-item div{
  width: 100%;
  text-align: center;
  font-size: 14px;
  padding:5px 0px 10px 0px;
}
</style>