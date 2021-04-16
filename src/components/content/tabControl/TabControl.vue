<template>
  <div class="tabControl">
    <div v-for="(item,index) in lists" class="tabControlItem" @click='doclick(index)' :class="{active: curIndex==index}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MymallTabcontrol',
  data(){
    return{
      curIndex:0
    }
  },
  props:{
    lists:{
      type:Array,
      default:()=>{
        return [];
      }
    }
  },
  methods:{
    doclick(index){
      this.curIndex=index;
      this.$emit('goodsClick', index);
    }
  }
};
</script>

<style scoped>
.tabControl{
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  justify-content: space-around;
  font-size: 15px;
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 2;
}
.tabControlItem span{
  padding: 6px;
}
.active{
  color: var(--color-high-text);
}
.active span{
  
  border-bottom: 3px solid var(--color-high-text);
}
</style>