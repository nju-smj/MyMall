<template>
  <div class="home-recom">
    <div v-for="item in recommend" :key="item.sort">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MymallHomerecommend',
  props:{
    recommend: Array
  }
};
</script>

<style scoped>
.home-recom{
  width: 100%;
  display: flex;
  text-align: center;
  border-bottom: 8px solid #eee;
  padding: 10px 0px;
}
.home-recom img{
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
}
.home-recom>div{
  flex: 1;
  font-size: 12px;
}
</style>