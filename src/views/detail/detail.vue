<template>
  <div id="detail">
    <detail-nav-bar class="detailNav"></detail-nav-bar>
    <better-scroll class="datailBS" ref="detailBS">
      <detail-swiper :topImages='topSwiper'></detail-swiper>
      <detail-base-info :goodsInfo='goodsInfo'></detail-base-info>
      <detail-seller-info :sellerInfo='sellerInfo'></detail-seller-info>
      <detail-goods-detail :detailInfo='goodsDetail' @detailImageLoad='doDetailRefresh'></detail-goods-detail>
    </better-scroll>
    
  </div>
</template>

<script>
import DetailNavBar from './childComps/detailNavBar'
import DetailSwiper from './childComps/detailSwpier'
import DetailBaseInfo from './childComps/detailBaseInfo'
import DetailSellerInfo from './childComps/detailSellerInfo'
import DetailGoodsDetail from './childComps/detailGoodsDetail'

import BetterScroll from 'components/common/BetterScroll/BetterScroll'

import {getDetailById,GoodsBaseInfo,Seller} from 'network/detail.js'
export default {
  name: 'MymallDetail',
  data() {
    return {
      productId:'',
      topSwiper:[],
      goodsInfo:{},
      sellerInfo:{},
      goodsDetail:{}
    };
  },
  created(){
    this.productId=this.$route.params.iid;
    getDetailById(this.productId).then(data=>{
      //顶部轮播图
      this.topSwiper=data.result.itemInfo.topImages;
      //商品信息
      this.goodsInfo=new GoodsBaseInfo(data.result.itemInfo,data.result.columns,data.result.shopInfo.services);
      //商家信息
      this.sellerInfo=new Seller(data.result.shopInfo);
      //商品详细信息
      this.goodsDetail=data.result.detailInfo;
      console.log(data);
    })
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailSellerInfo,
    BetterScroll,
    DetailGoodsDetail
  },
  methods:{
    doDetailRefresh(){
      this.$refs.detailBS.refresh();
    }
  }
};
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 4;
  background-color: #fff;
  height: 100vh;
}
.datailBS{
  height: calc(100% - 44px);
}
.detailNav{
  position: relative;
  z-index: 4;
  background-color: #fff;
}
</style>