<template>
  <div class="TabBarItem" @click='moveRoute' :style="activeStyle">
    <div v-if="isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-active-icon"></slot>
    </div>
    <div class="itemText">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabbaritem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return {
      
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle(){
      return this.isActive?{'color':this.activeColor}:{};
    }

  },
  methods: {
    moveRoute(){
      this.$router.replace(this.path);
    }
  },
};
</script>

<style scoped>
.TabBarItem{
    flex: 1;
    text-align: center;
    margin-top: 5px;
}
.itemText{
    font-size: 14px;
    margin-top: 2px;
  }
</style>