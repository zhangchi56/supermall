<template>
  <div class="cart-item-button">
    <div class="dot" :class="{bgc:checked}">
      <img src="~assets/img/cart/tick.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    isChecked:{
      type:Boolean,
      default: true
    }
  },
  data() {
    return {
      checked: this.isChecked
    }
  },
  methods: {
    // dotClick(){
      // this.item = !this.item

      // this.checked = !this.checked
      // console.log(this.$store.state.cartList)
      // console.log(this.checked)
      // this.$emit("dotClick")
    // }
  },
  watch: {
    isChecked:function(newValue){
      this.checked = newValue
    }
  },
  updated() {
    // console.log(this.checked)
  },
}
</script>

<style>
  .dot{
    width: 20px;
    height: 20px;
    border: 1px gray solid;
    border-radius: 50%;
    position: relative;
    top: 50%;
    margin-top: -10px;
  }
  .bgc{
    background-color: pink;
    border: 1px pink solid;
  }
</style>