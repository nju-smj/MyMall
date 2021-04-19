<template>
  <div class="goodslistltem" @click="clickToDetail">
    <img :src="imgSrc" alt="" @load="doLoad">
    <div class="itemInfo">
      <p>{{itemMsg.title}}</p>
      <span class="price">{{itemMsg.price}}</span><span class="collect">赞：{{itemMsg.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MymallGoodslistitem',
  props:{
    itemMsg:Object,
    default(){
      return {};
    }
  },
  data(){
    return {
      itemId:""
    }
  },
  computed:{
    imgSrc(){
      return this.itemMsg.image || this.itemMsg.show.img;
    }
  },
  methods:{
    doLoad(){
      this.$bus.$emit('imageLoad');
    },
    clickToDetail(){
      this.$router.push('/detail/'+this.itemId);
    }
  },
  created(){
    this.itemId=this.itemMsg.iid?this.itemMsg.iid:this.itemMsg.item_id;
  }
};
</script>

<style scoped>
.goodslistltem{
  padding-bottom: 40px;
  position: relative;
  width: 45%;
}
.goodslistltem img{
  width: 100%;
  border-radius: 5px;
}
.itemInfo{
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.itemInfo p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.itemInfo .price{
  color: var(--color-high-text);
  margin-right: 20px;
}
</style>