<template>
  <div class="goodslistltem" @click="listItemClick">
    <img v-lazy="showImg" @load="itemImgLoad" />
    <div class="itemInfo">
      <p>{{ itemData.title }}</p>
      <span class="price">{{ itemDataPrice }} </span
      ><span class="collect">赞：{{ itemDataCfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyMallGoodslistitem',
  data(){
    return {
      id: ""
    }
  },
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
          id:this.id
        }
      })
    }
  },
  computed:{
    showImg(){
      if(this.itemData.show){
        return this.itemData.show.img;
      }else if(this.itemData.image){
        return this.itemData.image;
      }else if(this.itemData){
        return this.itemData.img;
      }
    },
    itemDataPrice(){
      return '￥'+parseFloat(this.itemData.price).toFixed(2);
    },
    itemDataCfav(){
      let num=this.itemData.cfav;
      if(num>=10000){
        return parseInt(num/10000)+'w+'
      }
      return num;
    }
    
  },
  created(){
    if(this.itemData.iid){
      this.id=this.itemData.iid;
    }else if(this.itemData.item_id){
      this.id=this.itemData.item_id;
    }
  }
};
</script>

<style scoped>
.goodslistltem {
  padding-bottom: 40px;
  position: relative;
  width: 45%;
}
.goodslistltem img {
  width: 100%;
  border-radius: 5px;
}
.itemInfo {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.itemInfo p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.itemInfo .price {
  color: var(--color-high-text);
}
</style>