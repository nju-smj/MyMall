export default {
  addToCart(context, payload) {
    return new Promise((resolve,reject)=>{
      let oldProduct = context.state.cartList.find(item => item.iid == payload.iid);
      if (oldProduct) {
        context.commit('addCount',oldProduct);
        resolve('当前商品数量+1');
      } else {
        payload.count = 1;
        context.commit('addProduct', payload);
        resolve('成功添加当前商品');
      }
    })
    
  }
}