<template>
  <div>
    <nav-bar>
      <template v-slot:middle>
        <div>商品分类</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/Navbar/NavBar'
export default {
  name: 'MymallCategorynavbar',
  components:{
    NavBar
  }
};
</script>

<style lang="scss" scoped>

</style>