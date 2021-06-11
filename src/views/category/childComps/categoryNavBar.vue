<template>
  <div>
    <nav-bar>
      <template v-slot:center>
        <div>商品分类</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar'
export default {
  name: 'MymallCategorynavbar',
  components:{
    NavBar
  }
};
</script>

<style scoped>

</style>