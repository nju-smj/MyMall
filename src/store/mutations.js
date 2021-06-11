import { ADD_COUNT, ADD_PRODUCT, ALL_SELECTED, CHANGE_SELECTED} from './mutations-type'
export default {
  [ADD_COUNT](state,payload){
    payload.count++;
  },
  [ADD_PRODUCT](state,payload){
    payload.checked=false;
    state.cartList.push(payload);
  },
  [CHANGE_SELECTED](state,payload){
    let num=0;
    for(let index in state.cartList){
      if(state.cartList[index].iid==payload){
        num=index;
        break;
      }
    }
    state.cartList[num].checked=!state.cartList[num].checked;
  },
  [ALL_SELECTED](state,payload){
    state.cartList.forEach(item=>{
      item.checked=payload;
    });
  }
}