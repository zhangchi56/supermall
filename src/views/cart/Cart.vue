<template>
  <div id="cart">
    <nav-bar class="cart-nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from 'views/cart/childComps/CartList'
import BottomBar from 'views/cart/childComps/BottomBar'

import { mapGetters } from 'vuex'

export default {
  name: "Cart",
  data() {
    return {};
  },
  components: {
    NavBar,
    CartList,
    BottomBar
  },
  computed: {
    ...mapGetters({
      length: 'cartListLength'
    })
  },
};
</script>

<style scope>
  #cart{
    height:100vh;
  }
  .cart-nav-bar{
    background-color: pink;
    color: white;
  }
</style>