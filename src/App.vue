<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view />
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
const MainTabBar = () => import("components/content/MainTabBar.vue");
export default {
  components: {
    MainTabBar,
  },
};
</script>
<style>
@import url("assets/font/iconfont.css");
@import url("assets/css/base.css");
</style>
