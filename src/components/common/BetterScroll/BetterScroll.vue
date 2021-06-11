<template>
  <div class="wrapper" ref="bscroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'MymallBetterscroll',
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      BScroll:null
    }
  },
  mounted(){
    this.BScroll=new BScroll(this.$refs.bscroll,{
      pullUpLoad: this.pullUpLoad,
      click: true,
      observeDOM: true,
      probeType: this.probeType
    });
    if(this.probeType==2||this.probeType==3){
      this.BScroll.on('scroll',(pos)=>{
        this.$emit('nowScroll', pos);
      });
    }
    if(this.pullUpLoad){
      this.BScroll.on('pullingUp',()=>{
        this.$emit('pullingUp');
      });
    }
    
    // console.log(this.BScroll);
  },
  methods:{
    scrollTo(x,y,time= 500){
      this.BScroll && this.BScroll.scrollTo(x,y,time);
    },
    finishPullUp(){
      this.BScroll.finishPullUp();
    },
    refresh(){
      this.BScroll && this.BScroll.refresh();
    },
    getPosY(){
      return this.BScroll? this.BScroll.y:0;
    }
  }
};
</script>

<style scoped>

</style>