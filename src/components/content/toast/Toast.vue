<template>
  <div v-show="isShow">
    <div class="message">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'MymallToast',
  data(){
    return {
      message: '',
      isShow: false
    }
  },
  methods:{
    show(msg='默认文字',delay=1500){
      this.message=msg;
      this.isShow=true;
      setTimeout(()=>{
        this.message='';
        this.isShow=false;
      },delay);
    }
  }
};
</script>

<style scoped>
.message{
  position: absolute;
  left: 50%;
  top: 50%;
  background-color: rgba(0, 0, 0, .7);
  color: white;
  transform: translate(-50%,-50%);
  padding: 5px 10px;
  border-radius: 10px;
  z-index: 999;
}
</style>