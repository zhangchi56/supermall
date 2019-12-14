import {
  ADD_COUNT,
  ADD_TO_CART
} from './mutation-type'

export default {
  //异步操作，和mutations里面需要判断的，复杂的function也推荐写到actions，因为尽可能让mutations只处理单一事件
  addCart(context,payload){
    return new Promise((resolve,reject) => {
      let oldProduct = null;
      // payload新添加的商品
      // context.state.cartList.push(payload)
      for (let item of context.state.cartList) {
        if(item.iid === payload.iid){
          oldProduct = item
        }
      }
      // let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if(oldProduct){
        //再来亿遍
        context.commit(ADD_COUNT,oldProduct)
        resolve('该商品数量加1')
        
        // console.log(payload.count)
        // console.log(oldProduct.count)
        //这里的oldProduct.count 与 cartLIst push进去payload.count 是双向绑定？ 应该是了 payload.count = 1  会让外面的product增加一个属性，count 且值为1
        //既然加了count属性，为什么在对应传值的地方， 打印 product。count却为 未定义 ,只能在这里面打印oldProduct.count才有值
      }else{
        payload.count = 1//             将传过来的product加了.count      product.count = 1     之后判断，又是刚才的product 将product 赋值给   oldProduct     并将oldProduct.count +1
        // context.cartList.push(payload)
        context.commit(ADD_TO_CART,payload)
        resolve("添加商品成功")
      }
      reject('添加商品失败')
    })
    

  }
}