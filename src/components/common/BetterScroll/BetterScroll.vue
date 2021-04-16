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
      // observeDOM: true,
      probeType: this.probeType
    });
    this.BScroll.on('scroll',(pos)=>{
      this.$emit('nowScroll', pos);
    });
    this.BScroll.on('pullingUp',()=>{
      this.$emit('pullingUp');
    })
  },
  methods:{
    scrollTo(x,y,time= 500){
      this.BScroll.scrollTo(x,y,time);
    },
    finishPullUp(){
      this.BScroll.finishPullUp();
    }
  }
};
</script>

<style scoped>

</style>