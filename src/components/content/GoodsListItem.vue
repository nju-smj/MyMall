<template>
  <div class="goodslistltem" @click="listItemClick">
    <img :src="itemData.show.img" @load="itemImgLoad">
    <div class="itemInfo">
      <p>{{itemData.title}}</p>
      <span class="price">{{itemData.price}}</span><span class="collect">赞：{{itemData.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyMallGoodslistitem',
  props:{
    itemData:{
      type: Object,
      default(){
        return {};
      }
    }
  },
  methods:{
    itemImgLoad(){
      this.$bus.$emit('itemImgLoad');
    },
    listItemClick(){
      this.$router.push({
        path: '/detail',
        query: {
          id:this.itemData.iid
        }
      })
    }
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