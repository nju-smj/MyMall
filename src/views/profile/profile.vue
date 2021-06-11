<template>
  <div>
    <profile-nav-bar></profile-nav-bar>
    <profile-login></profile-login>
    <profile-purse></profile-purse>
    <profile-msg></profile-msg>
    <profile-other></profile-other>
  </div>
</template>

<script>
import ProfileNavBar from './childComps/profileNavBar'
import ProfileLogin from './childComps/profileLogin'
import ProfilePurse from './childComps/profilePurse'
import ProfileMsg from './childComps/profileMsg'
import ProfileOther from './childComps/profileOther'
export default {
  name: 'MymallProfile',
  components:{
    ProfileNavBar,
    ProfileLogin,
    ProfilePurse,
    ProfileMsg,
    ProfileOther
  }
};
</script>

<style scoped>

</style>