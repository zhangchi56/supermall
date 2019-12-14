<template>
  <div class="navbar-bottom">
    <div class="navbar-container">

      <div class="navbar-left">

        <div>
          <span class="icon service"></span>
          <span>客服</span>
        </div>
        <div>
          <span class="icon shopping"></span>
          <span>客服</span>
        </div>
        <div>
          <span class="icon"></span>
          <span>客服</span>
        </div>

      </div>
      <div class="navbar-right">
        <div class="add-cart" @click="clickAddCart">加入购物车</div>
        <div class="buy">购买</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    clickAddCart(){
      this.$emit("clickAddCart")
    }
  },
};
</script>

<style scope>
.navbar-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  background-color: white;
}
.navbar-container {
  text-align: center;
  display: flex;
}
.navbar-left {
  flex: 1;
  display: flex;
  /* background-color: pink; */
  font-size: 13px;
}
.navbar-left>div{
  flex:1;
}
.navbar-left .icon{
  display: block;
  width: 22px;
  height: 22px;
  margin: 6px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.navbar-left .service{
  background-position:0 -52px;
}
.navbar-left .shopping{
  background-position:0 -98px;
}
.navbar-right{
  flex: 1;
  display: flex;
  height:49px;
  line-height: 49px;
}
.navbar-right>div{
  flex: 1;
}
.add-cart {
  background-color: #ffe817;
}
.buy {
  background-color: #ff6699;
}
</style>