<template>
  <div>
    <swiper :interval='Number(1500)'>
      <swiper-item v-for="item in banner">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index';
export default {
  name: 'MymallHomeswiper',
  data(){
    return {
      isEmit:false
    }
  },
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
  },
  methods:{
    imageLoad(){
      if(!this.isEmit){
        this.$emit('imageHasLoaded');
        this.isEmit=true;
      }
    }
  }
};
</script>

<style scoped>

</style>