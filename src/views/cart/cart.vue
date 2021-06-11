<template>
  <div class="shop-cart">
    <nav-bar class="cart-nav-bar">
      <template v-slot:center>
        <div>
          购物车({{length}})
        </div>
      </template>
    </nav-bar>
    <scroll class="cart-scroll" :probe-type="3" ref="cartBS">
      <cart-list class="cart-list"></cart-list>
    </scroll>
    <cart-bottom-calc/>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar/NavBar";
import Scroll from 'components/common/Scroll/Scroll'
import CartList from './childComps/CartList'
import CartBottomCalc from './childComps/CartBottomCalc'
import {mapGetters} from 'vuex';
export default {
  name: 'MymallCart',
  components:{
    NavBar,
    Scroll,
    CartList,
    CartBottomCalc
  },
  computed:{
    ...mapGetters({
      length: 'cartListLength',
    })
  },
  activated(){
    this.$refs.cartBS.refresh();
  }
};
</script>

<style scoped>
.shop-cart{
  height: 100vh;
}
.cart-nav-bar{
  background-color: var(--color-high-text);
  color: white;
}
.cart-scroll{
  position: absolute;
  top: 44px;
  right: 0px;
  bottom: 93px;
  left: 0px;
  overflow: hidden;
}
</style>