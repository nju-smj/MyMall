<template>
  <div v-if="Object.keys(detailInfo).length!=0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-lazy="item" v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" @load="detailImageLoad">
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'MymallDetailgoodsdetail',
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {};
      }
    }
  },
  data(){
    return{
      timer:null
    }
  },
  methods:{
    detailImageLoad(){
      if(this.timer){
        clearTimeout(this.timer);
      }
      this.timer=setTimeout(()=>{
        this.$emit('detailImageLoad');
        // console.log('------');
      },100);
      
    }
  }
};
</script>

<style scoped>
.start{
  width: 100px;
  height: 6px;
  border-left: 6px solid black;
  border-bottom: 2px solid var(--color-tint);
  margin: 0px 0px 10px 10px;
}
.end{
  float: right;
  width: 100px;
  height: 6px;
  border-right: 6px solid black;
  border-bottom: 2px solid var(--color-tint);
  margin: 10px 10px 0px 0px;
}
.desc{
  font-size: 12px;
  margin: 0 20px;
  text-indent: 2em;
  text-align: left;
}
.info-list img{
  width: 100%;
  margin: 2px 0px;
}
.info-key{
  text-align: center;
  font-size: 16px;
  padding: 8px 0px;
}
</style>