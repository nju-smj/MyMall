<template>
  <div>
    <nav-bar>
      <div slot="left" class="datail-nav-left" @click="backClick">
        <img src="~assets/img/detail/back.svg" alt="">
      </div>
      <div slot="middle" class="detail-nav-mid">
        <div v-for="(item, index) in list" @click="navItemClick(index)" :class="{active: index==curIndex}">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/Navbar/NavBar'
export default {
  name: 'MymallDetailnavbar',
  components:{
    NavBar
  },
  data(){
    return {
      list:['商品','参数','评论','推荐'],
      curIndex: 0
    }
  },
  methods:{
    backClick(){
      this.$router.back();
    },
    navItemClick(index){
      this.curIndex=index;
      this.$emit('navClick', index);
    }
  }
};
</script>

<style scoped>
.detail-nav-mid{
  display: flex;
  justify-content: space-around;
  font-size: 14px;
}
.datail-nav-left{
  position: relative;
  top: 5px;
}
.active{
  color: var(--color-high-text);
}
</style>