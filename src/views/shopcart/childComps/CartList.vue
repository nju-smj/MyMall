<template>
  <div>
    <cart-list-item v-for="(item,index) in goodsList" :key="index" :product='item'></cart-list-item>
  </div>
</template>

<script>
import CartListItem from './CartListItem'
import {mapGetters} from 'vuex';
export default {
  name: 'MymallCartlist',
  computed:{
    ...mapGetters({
      goodsList: 'carListVal'
    })
  },
  components:{
    CartListItem
  }
};
</script>

<style scoped>

</style>