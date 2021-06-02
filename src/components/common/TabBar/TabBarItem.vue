<template>
  <div class="tab-bar-item" :style="activeColorClass" @click="itemClicked">
    <div class="item-icon" v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div class="item-icon-active" v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div class="item-text">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MymallTabbaritem',
  props:{
    path:{
      type: String
    },
    activeColor:{
      type: String,
      default: 'red'
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeColorClass(){
      return this.isActive?{color:this.activeColor}:{};
    }
  },
  methods: {
    itemClicked(){
      this.$router.push(this.path);
    }
  },
};
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  margin-top: 4px;
}
.item-text{
  font-size: 14px;
}
</style>