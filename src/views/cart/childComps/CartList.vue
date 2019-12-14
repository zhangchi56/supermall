<template>
  <div class="cart-list">
    <scroll class="cart-scroll">
      <cart-item :item="item" v-for="(item, index) in cartList" :key="index"></cart-item>
    </scroll>
  </div>
</template>

<script>
import CartItem from "views/cart/childComps/CartItem";
import Scroll from "components/common/scroll/Scroll";

export default {
  data() {
    return {
      cartList: this.$store.state.cartList
    };
  },
  components: {
    CartItem,
    Scroll
  }
};
</script>

<style scope>
.cart-list {
  height: calc(100% - 49px - 44px - 44px);/* 这里的 - 35px 本来应该是- 44px的，但是因为某个bug，被迫-35px */
  /* background-color: black; */
}
.cart-scroll{
  position:absolute;
  top: 44px;
  bottom: 93px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>