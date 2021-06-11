<template>
  <div class="profile-purse">
    <div class="purse-left">
      <div class="purse-12">
        <div class="purse-1"><span class="number-style">0.00</span>元</div>
        <div class="purse-2">我的余额</div>
      </div>
    </div>
    <div class="purse-middle ">
      <div class="purse-12">
        <div class="purse-1"><span class="number-style">0</span>个</div>
        <div class="purse-2">优惠券</div>
      </div>
    </div>
    <div class="purse-right">
      <div class="purse-12">
        <div class="purse-1"><span class="number-style">0</span>分</div>
        <div class="purse-2">我的积分</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MymallProfilepurse',
};
</script>

<style scoped>
.profile-purse{
  display: flex;
  height: 90px;
  border-bottom: 15px solid rgba(100, 100, 100, .1);
}
.purse-left,.purse-middle,.purse-right{
  flex: 1;
  height: 100%;
  text-align: center;
  border-right: 1px solid rgba(100, 100, 100, .1);
  position: relative;
}
.number-style{
  font-size: 18px;
  color: rgb(189, 161, 39);
  font-weight: bold;
}
.purse-12{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 100%;
}
.purse-2{
  font-size: 16px;
  margin-top: 5px;
  width: 100%;
}
</style>