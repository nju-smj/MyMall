<template>
  <div>
    <ul>
      <li>
        <span class="iconfont icon-gouwuche"></span>我的购物车
      </li>
      <li>
        <span class="iconfont icon-xiazai"></span>下载购物APP
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MymallProfileother',
};
</script>

<style scoped>
ul li{
  height: 40px;
  line-height: 40px;
  border-bottom: 2px solid rgba(100, 100, 100, .1);
  padding-left: 30px;
}
ul li span{
  padding-right: 10px;
  color: rgb(158, 146, 146);
}
ul li:last-child{
  border: none;
}
</style>