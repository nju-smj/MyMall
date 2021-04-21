<template>
  <div class="cart-bot-calc">
    <div class="bottom-clac-left" @click="doAllClick">
      <span class="iconfont icon-xuanzhong" v-if="isAllChecked"></span>
      <span v-else class="iconfont icon-2weixuanzhong"></span>
      <span>全选</span>
    </div>
    <div class="cart-bot-middle">
      合计：<span>￥{{ totalPrice }}</span>
    </div>
    <div class="cart-bot-right" @click="doGoCalcClick">结算 ({{ goodsNum }})</div>
  </div>
</template>

<script>
export default {
  name: "MymallCartbottomcalc",
  data() {
    return {
      allChecked: false,
    };
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList
        .filter((item) => item.checked)
        .reduce((iter, nowItem) => {
          return iter + nowItem.count * nowItem.price;
        }, 0);
    },
    goodsNum() {
      return this.$store.state.cartList.filter((item) => item.checked).length;
    },
    isAllChecked() {
      if (this.$store.state.cartList.length == 0) {
        this.allChecked = false;
      } else {
        this.allChecked = this.$store.state.cartList.every(
          (item) => item.checked
        );
      }
      return this.allChecked;
    },
  },
  methods: {
    doAllClick() {
      this.allChecked = !this.allChecked;
      this.$store.commit("allSelected", this.allChecked);
    },
    doGoCalcClick(){
      if(!this.$store.state.cartList.some(item=>item.checked)){
        this.$toast.show('请选择商品再结算',1500);
      }
    }
  },
};
</script>

<style scoped>
@import url("~components/common/Tabbar/fontfamily/iconfont.css");
.cart-bot-calc {
  height: 44px;
  background-color: #fff;
  position: fixed;
  bottom: 49px;
  width: 100%;
  display: flex;
  line-height: 44px;
  font-size: 14px;
}
.bottom-clac-left {
  width: 70px;
  padding-left: 7px;
}
.bottom-clac-left span:last-child {
  padding-left: 5px;
  position: relative;
  top: -1px;
}
.cart-bot-right {
  width: 90px;
  text-align: center;
  position: relative;
  top: 2px;
  background-color: rgb(226, 146, 25);
  color: #fff;
  padding: 0px 10px;
  border-radius: 17px;
  margin: 6px;
  line-height: 34px;
}
.cart-bot-middle {
  flex: 1;
  text-align: center;
  position: relative;
  top: 2px;
}
.cart-bot-middle span {
  color: orange;
}
.iconfont {
  font-size: 20px;
  color: orange;
}
</style>