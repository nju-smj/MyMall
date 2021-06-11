<template>
  <div class="cart-list-item"  @click="selectorClick">
    <div class="selector">
      <span class="iconfont icon-xuanzhong" v-if="product.checked"></span>
      <span v-else class="iconfont icon-2weixuanzhong"></span>
    </div>
    <div class="cart-img">
      <img v-lazy="product.img" alt="">
    </div>
    <div class="description">
      <div class="cart-prod-title">{{product.title}}</div>
      <div class="cart-prod-desc">{{product.desc}}</div>
      <div class="cart-bottom">
        <span>￥{{product.price}}</span><span>X{{product.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { CHANGE_SELECTED } from 'store/mutations-type'
export default {
  name: 'MymallCartlistitem',
  props:{
    product:{
      type: Object,
      default(){
        return {};
      }
    }
  },
  methods:{
    selectorClick(){
      this.$store.commit(CHANGE_SELECTED,this.product.iid);
    }
  }
};
</script>

<style scoped>
.cart-list-item{
  width: 100%;
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.selector{
  align-self: center;
}
.selector span{
  font-size: 22px;
  margin: 0px 2px;
  color: orange;
}
.cart-img{
  margin: 5px;
}
img{
  width: 75px;
  height: 100px;
  border-radius: 5px;
  display: block;
}
.description{
  margin: 5px;
  position: absolute;
  top: 5px;
  right: 5px;
  left: 116px;
  height: 100px;
}
.cart-prod-title, .cart-prod-desc{
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  overflow: hidden;
}
.cart-prod-title{
  font-size: 14px;
}
.cart-prod-desc{
  font-size: 12px;
  margin-top: 10px;
}
.cart-bottom{
  position: absolute;
  bottom: 5px;
  width: 100%;
}
.cart-bottom span:first-child{
  color: orange;
}
.cart-bottom span:last-child{
  position: absolute;
  right: 10px;
}
</style>