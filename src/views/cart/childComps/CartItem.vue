<template>
  <div class="cart-item">
    <cart-item-button
      class="commodity-button"
      :isChecked="item.isChecked"
      @click.native="checkedChange"
    ></cart-item-button>
    <div class="commodity-img">
      <img :src="item.image" alt />
    </div>
    <div class="commodity-info">
      <div class="commodity-info-title">{{item.title}}</div>
      <div class="commodity-info-desc">{{item.desc}}</div>
      <div class="commodity-info-number">
        <div class="left">{{item.price}}</div>
        <div class="right">x{{item.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItemButton from "views/cart/childComps/CartItemButton";

export default {
  props: {
    item: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      
    };
  },
  components: {
    CartItemButton
  },
  methods: {
    checkedChange() {
      console.log("我被点击了")
      this.item.isChecked = !this.item.isChecked;
    }
  },
  mounted() {
    //  console.log(this.item)
  }
};
</script>

<style scope>
.cart-item {
  padding: 8px 0;
  display: flex;
  width: 100%;
  height: 120px;
  border-bottom: 1px gray solid;
  /* background-color: purple; */
}
.cart-item > div {
  height: 100%;
}
.commodity-button {
  flex: 0 0 6%;
  /* height: 100%; */
  /* align-self: center; */
}
.commodity-img {
  /* flex: 1; */
  margin-right: 10px;
}
.commodity-img img {
  height: 100%;
  border-radius: 10%;
}
.commodity-info {
  position: relative;
  flex: 1;
  /* flex:0 0 94%; */
  margin-right: 10px;
  overflow: hidden;
}
.commodity-info-title,
.commodity-info-desc {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 10px;
}
.commodity-info-number {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>