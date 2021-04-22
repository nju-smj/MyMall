<template>
  <div class="profile-msg">
    <ul>
      <li>
        <span class="iconfont icon-wodexiaoxi"></span>我的消息
      </li>
      <li>
        <span class="iconfont icon-jifenshangcheng"></span>积分商城
      </li>
      <li>
        <span class="iconfont icon-huiyuanqia"></span>会员卡
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MymallProfilemsg',

};
</script>

<style scoped>
ul{
  border-bottom: 14px solid rgba(100, 100, 100, .1);
}
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
</style>