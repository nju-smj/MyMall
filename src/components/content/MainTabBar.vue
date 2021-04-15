<template>
  <div>
    <tab-bar>
      <tab-bar-item path='/home' activeColor='pink'>
        <span class="iconfont icon-index" slot="item-icon"></span>
        <span class="iconfont icon-index-copy" slot="item-active-icon"></span>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category' activeColor='pink'>
        <span class="iconfont icon-leimupinleifenleileibie" slot="item-icon"></span>
        <span class="iconfont icon-leimupinleifenleileibie2" slot="item-active-icon"></span>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/shopcart' activeColor='pink'>
        <span class="iconfont icon-gouwuchekong" slot="item-icon"></span>
        <span class="iconfont icon-gouwucheman" slot="item-active-icon"></span>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile' activeColor='pink'>
        <span class="iconfont icon-my" slot="item-icon"></span>
        <span class="iconfont icon-wode" slot="item-active-icon"></span>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '../common/Tabbar/TabBar';
import TabBarItem from '../common/Tabbar/TabBarItem';
export default {
  name: 'Maintabbar',
  components:{
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped>
@import url('../common/Tabbar/fontfamily/iconfont.css');
</style>