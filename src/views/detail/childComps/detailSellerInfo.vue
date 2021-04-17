<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="sellerInfo.logo" alt="">
      <span class="shop-title">{{sellerInfo.name}}</span>
    </div>
    <div class="shop-mid">
      <div class="shop-mid-left">
        <div class="info-sells">
          <div class="sells-count">
            {{sellerInfo.sells |sellCountFilter}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{sellerInfo.goodsCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-mid-right">
        <table>
          <tr v-for="(item,index) in sellerInfo.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{scoreBetter:item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{betterBetter:item.isBetter}"><span>{{item.isBetter?"高":"低"}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <a href="#">进店逛逛</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MymallDetailsellerinfo',
  props:{
    sellerInfo:{
      type:Object,
      default(){
        return {};
      }
    }
  },
  filters:{
    sellCountFilter(val){
      if(val>=10000){
        val/=10000;
        return parseFloat(val).toFixed(1)+"万";
      }else{
        return val;
      }
    }
  }
};
</script>

<style scoped>
.shop-info{
  border-top: 3px solid rgba(100, 100, 100, .1);
  padding-top: 20px;
  padding-bottom: 20px;
}
.shop-top{
  height: 55px;
}
.shop-top img{
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-left: 15px;
  border: 2px solid rgba(100, 100, 100, .1);
}
.shop-title{
  line-height: 70px;
  position: relative;
  top: -15px;
  left: 10px;
  font-size: 14px;
}
.shop-mid{
  display: flex;
}
.shop-mid-left{
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  text-align: center;

  align-items: center;
}
.sells-text,.goods-text{
  margin-top: 4px;
  font-size: 12px;
}
.goods-count,.sells-count{
  font-size: 16px;
}
.info-goods{
  padding: 6px 20px 6px 0px;
  border-right: 2px solid rgba(100, 100, 100, .1);
}
.shop-mid-right{
  width: 50%;
  font-size: 12px;
  text-align: center;
}

.shop-mid-right table tr td{
  padding: 3px 5px;
}
.score{
  color: green;

}
.scoreBetter{
  color: red;
}
.better{
  color: white;
  background-color: green;
}
.betterBetter{
  background-color: red;
}
.shop-bottom{
  display: block;
  width: 160px;
  height: 30px;
  background-color: rgba(100, 100, 100, .1);
  text-align: center;
  line-height: 30px;
  margin: 20px auto 10px;
  font-size: 14px;
  border-radius: 15px;
}
</style>