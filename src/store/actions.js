import { ADD_COUNT, ADD_PRODUCT} from './mutations-type'
export default {
  addToCart(context,payload){
    let product = context.state.cartList.find(item => item.iid == payload.iid);
    if(product){
      //数量加一
      context.commit(ADD_COUNT,product);
    }else{
      //加入商品
      payload.count=1;
      context.commit(ADD_PRODUCT,payload);
    }
  }
}