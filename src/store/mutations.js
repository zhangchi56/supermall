import {
  ADD_COUNT,
  ADD_TO_CART
} from './mutation-type'

export default {
  //只处理单一事件原则
  [ADD_COUNT](state,payload){
    payload.count++
  },
  [ADD_TO_CART](state,payload){
    payload.isChecked = true
    state.cartList.push(payload)
  }
}