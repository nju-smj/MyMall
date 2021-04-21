import { ADD_COUNT, ADD_PRODUCT, ALL_SELECTED} from './mutations-type'
export default {
  [ADD_COUNT](state, paylaod){
    paylaod.count++;
  },
  [ADD_PRODUCT](state, payload){
    payload.checked=false;
    state.cartList.push(payload);
  },
  [ALL_SELECTED](state,payload){
    state.cartList.forEach(item=>{
      item.checked=payload;
    });
  }
}