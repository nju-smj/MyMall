<template>
  <div>
    <swiper :interval='Number(1500)'>
      <swiper-item v-for="item in banner">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index';
export default {
  name: 'MymallHomeswiper',
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    banner:{
      type:Array,
      default(){
        return [];
      }
    }
  }
  
};
</script>

<style scoped>

</style>