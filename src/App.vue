<template>
  <div>
    <keep-alive exclude="MymallDetail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
require('es6-promise').polyfill();
require('es6-promise/auto');
import MainTabBar from './components/content/MainTabBar'
export default {
  components:{
    MainTabBar
  }
}
</script>
<style>
@import url('./assets/css/base.css');
</style>
