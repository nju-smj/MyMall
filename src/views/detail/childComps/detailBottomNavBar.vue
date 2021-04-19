<template>
  <div class="bottom-nav-bar">
    <div class="left">
      <div>
        <span class="iconfont icon-dianpu"></span>
        <p>店铺</p>
      </div>
      <div>
        <span class="iconfont icon-kefu"></span>
        <p>客服</p>
      </div>
      <div>
        <span class="iconfont icon-shoucang"></span>
        <p>收藏</p>
        </div>
    </div>
    <div class="right">
      <div @click="addToCart">加入购物车</div>
      <div>购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MymallDetailbottomnavbar',
  data() {
    return {
      
    };
  },
  mounted() {
    
  },
  methods: {
    addToCart(){
      this.$emit('addToCart');
    }
  },
};
</script>

<style scoped>
.left,.right{
  display: flex;
  width: 50%;
}
.left div,.right div{
  flex: 1;
  padding-top: 3px;
}
.left div p,.right div p{
  font-size: 14px;
  position: relative;
  top: 5px;
}
.left div span,.right div span{
  font-size: 20px;
}
.bottom-nav-bar{
  height: 49px;
  background-color: #fff;
  width: 100%;
  text-align: center;
}
.right{
  color: white;
}
.right div{
  padding-bottom: 10px;
}
.right div:first-child{
  background-color: orange;
  line-height: 44px;
  height: 49px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  padding-left: 10px;
}
.right div:nth-child(2){
  background-color: rgb(192, 159, 13);
  border-bottom-right-radius: 25px;
  border-top-right-radius: 25px;
  line-height: 44px;
  height: 49px;
}
</style>