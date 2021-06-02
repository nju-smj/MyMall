<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="pink">
        <template v-slot:item-icon>
          <div class="iconfont icon-index"></div>
        </template>
        <template v-slot:item-icon-active>
          <div class="iconfont icon-index-copy"></div>
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="pink">
        <template v-slot:item-icon>
          <div class="iconfont icon-leimupinleifenleileibie"></div>
        </template>
        <template v-slot:item-icon-active>
          <div class="iconfont icon-leimupinleifenleileibie2"></div>
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="pink">
        <template v-slot:item-icon>
          <div class="iconfont icon-gouwuchekong"></div>
        </template>
        <template v-slot:item-icon-active>
          <div class="iconfont icon-gouwucheman"></div>
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="pink">
        <template v-slot:item-icon>
          <div class="iconfont icon-my"></div>
        </template>
        <template v-slot:item-icon-active>
          <div class="iconfont icon-wode"></div>
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
const TabBar = () => import("components/common/TabBar/TabBar.vue");
const TabBarItem = () => import("components/common/TabBar/TabBarItem.vue");
export default {
  name: "MymallMaintabbar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
.iconfont {
  font-size: 18px;
}
</style>