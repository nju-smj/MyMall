import {request} from './request'
export function getDetailById(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  });
}
export class GoodsBaseInfo{
  constructor(itemInfo,columns,services){
    this.title=itemInfo.title;
    this.desc=itemInfo.desc;
    this.newPrice=itemInfo.price;
    this.oldPrice=itemInfo.oldPrice;
    this.discount=itemInfo.discountDesc;
    this.columns=columns;
    this.services=services;
    this.realPrice=itemInfo.lowNowPrice;
  }
}

export class Seller{
  constructor(shopInfo){
    this.logo=shopInfo.shopLogo;
    this.name=shopInfo.name;
    this.fans=shopInfo.cFans;
    this.sells=shopInfo.cSells;
    this.score=shopInfo.score;
    this.goodsCount=shopInfo.cGoods;
  }
}

export class Sizes{
  constructor(itemParams){
    this.infoKey=itemParams.info.key;
    this.infoSet=itemParams.info.set;
    this.ruleKey=itemParams.rule.key;
    this.ruleTable=itemParams.rule.tables[0];
  }
}