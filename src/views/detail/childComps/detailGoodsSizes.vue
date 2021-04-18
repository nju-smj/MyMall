<template>
  <div class="detail-goods-size-table">
    <div class="goods-size-rulekey">{{goodsSize.ruleKey}}</div>
    <table>
      <tr v-for="item1 in goodsSize.ruleTable">
        <td v-for="item2 in item1">{{item2}}</td>
      </tr>
    </table>
    <div class="goods-size-infokey">{{goodsSize.infoKey}}</div>
    <table>
      <tr v-for="value1 in goodsSize.infoSet">
        <td>{{value1.key}}</td>
        <td>{{value1.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MymallDetailgoodssizes',
  props:{
    goodsSize:{
      type: Object,
      default(){
        return {};
      }
    }
  }
};
</script>

<style scoped>
.goods-size-rulekey,.goods-size-infokey{
  text-align: center;
  font-size: 16px;
  width: 100px;
  margin: 15px auto ;
  box-shadow: 0px 0px 1px 2px rgba(123, 234, 163, .5);
}
.detail-goods-size-table{
    padding-bottom: 50px;
}
.detail-goods-size-table table{
  width: 300px;
  margin: 0 auto;
  font-size: 12px;
  text-align: left;
}

.detail-goods-size-table table tr td{
  padding: 5px 0px;
  border-bottom: 2px solid rgba(100, 100, 100, .1);
}
.detail-goods-size-table table tr td:nth-child(1){
  width: 60px;
}
</style>