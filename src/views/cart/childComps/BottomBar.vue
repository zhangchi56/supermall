<template>
  <div class="bottom-bar">
    <div class="allChecked">
      <cart-item-button class="checked-btn" @click.native="clickAllBtn" v-model="haveUnchecked"></cart-item-button>
      <div>全选</div>
    </div>
    <div class="total">合计:￥{{cartTotal}}</div>
    <div class="toCompute">去计算({{toComputeNum}})</div>
  </div>
</template>

<script>
import CartItemButton from "views/cart/childComps/CartItemButton";

export default {
  data() {
    return {
      cartList: this.$store.state.cartList
    };
  },
  components: {
    CartItemButton
  },
  methods: {
    clickAllBtn() {
      // for (let item of this.cartList) {
      //   item.isChecked = !item.isChecked
      //   console.log(item)
      //   console.log(item.isChecked)
      // }
      //判断是否有未选中的按钮
      let haveUnchecked = this.cartList.filter(item => !item.isChecked).length;
      console.log(haveUnchecked);
      if (haveUnchecked) {
        //有未选中的按钮,则全部选中
        for (const item of this.cartList) {
          item.isChecked = true;
        }
      } else {
        for (const item of this.cartList) {
          item.isChecked = false;
        }
      }
    },
    // 计算购物车去结算的数量
    
  },
  computed: {
    //计算总价
    cartTotal() {
      // let cartList = this.$store.state.cartList;
      return this.cartList
        .filter(item => item.isChecked)
        .reduce((preValue, item) => {
          return preValue + item.count * item.price;
        }, 0)
        .toFixed(2);
    },
    toComputeNum(){
      let total = 0
      this.cartList.forEach(item => {
        if(item.isChecked){
          total += 1
        }
      });
      return total
    },
    //判断是否有未选中的
    haveUnchecked: function() {
      return (
        this.$store.state.cartList.find(item => item.checked === false) === undefined
      );
    }
  },
  updated() {
    // console.log(this.$store.state.cartList)
    // console.log(this.$store.state.cartList.filter(item => item.isChecked))
    
  }
};
</script>

<style>
.bottom-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  background-color: #cccccc;
  /* text-align: center; */
}
.allChecked {
  display: flex;
}
.allChecked {
  width: 100px;
  /* background-color: purple; */
  padding-left: 10px;
}
.allChecked .checked-btn {
  line-height: 22px;
}
.total {
  flex: 1;
}
.toCompute {
  width: 100px;
  text-align: center;
  background-color: #ff4500;
}
</style>