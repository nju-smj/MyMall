<template>
  <div class="profile-login">
    <div class="profile-icon iconfont icon-denglu"></div>
    <div class="login-middle">
      <div>登录/注册</div>
      <div><span class="iconfont icon-shouji54"></span>暂无绑定手机号</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MymallProfilelogin',
};
</script>

<style scoped>
.profile-login{
  background-color: var(--color-tint);
  display: flex;
  height: 90px;
}
.profile-icon{
  margin-left: 50px;
  font-size: 60px;
  align-self: center;
  color: var(--color-high-text);
}
.login-middle{
  flex: 1;
  padding-left: 30px;
  color: white;
}
.login-middle div:first-child{
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.login-middle div:nth-child(2){
  font-size: 14px;
}
</style>