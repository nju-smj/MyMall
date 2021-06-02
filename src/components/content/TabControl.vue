<template>
  <div class="tab-control">
    <div v-for="(item,index) in list" 
      class="tab-control-item"
      @click="itemClick(index)">
      <span :class="{'active-item':index==currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyMallTabcontrol',
  props:{
    list:{
      type: Array,
      default(){
        return [];
      }
    }
  },
  data(){
    return {
      currentIndex: 0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex=index;
      this.$emit('tabClick', index);
    }
  }
};
</script>

<style scoped>
.tab-control{
  height: 40px;
  line-height: 40px;
  text-align: center;
  display: flex;
  background-color: white;
  font-size: 15px;
  margin-bottom: 5px;
}
.tab-control-item{
  flex: 1;
}
.tab-control-item span{
  padding: 6px;
}
.active-item{
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-high-text);
}
</style>