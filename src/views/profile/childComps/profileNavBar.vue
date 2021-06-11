<template>
  <div>
    <nav-bar class="profile-nav-bar">
      <template v-slot:center>
        <div class="profile-title">
          我的
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar'
export default {
  name: 'MymallProfilenavbar',
  components:{
    NavBar
  }
};
</script>

<style scoped>
.profile-nav-bar{
  background-color: var(--color-tint);
}
.profile-title{
  color: white;
}
</style>