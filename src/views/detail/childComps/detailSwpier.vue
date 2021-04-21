<template>
  <swiper class="topSwiper" :interval='1000'>
    <swiper-item v-for="(item,index) in topImages" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'
export default {
  name: 'MymallDetailswpier',
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return [];
      }
    }
  }
};
</script>

<style scoped>
.topSwiper{
  height: 300px;
}
</style>