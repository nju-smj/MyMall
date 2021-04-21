<template>
  <div class="shop-cart">
    <cart-nav-bar class="cart-nav-bar">
      <template v-slot:middle>
        <div>
          购物车({{length}})
        </div>
      </template>
    </cart-nav-bar>

    <better-scroll class="cart-scroll" :probe-type="3" ref="cartBS">
      <cart-list class="cart-list"></cart-list>
    </better-scroll>
    <cart-bottom-calc></cart-bottom-calc>
  </div>
</template>

<script>
import CartNavBar from "components/common/Navbar/NavBar";
import BetterScroll from 'components/common/BetterScroll/BetterScroll'
import CartBottomCalc from './childComps/CartBottomCalc'
import CartList from './childComps/CartList'

import {mapGetters} from 'vuex';

export default {
  name: 'MymallShopcart',
  components:{
    CartNavBar,
    CartList,
    BetterScroll,
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