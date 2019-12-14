<template>
  <div v-if="Object.keys(goods).length !==0" class="base-info">
    {{goods.title}}
    <div class="goods-price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discountDesc" class="type-price" style="background: red">{{goods.discountDesc}}</span>
    </div>
    <ul class="sales-volume">
      <li v-for="(item, index) in goods.columns" :key="index">{{item}}</li>
    </ul>
    <ul class="services">
      <li class="services-items" v-for="(item, index) in goods.services" :key="index">
        <img :src="item.icon">
        <span>{{item.name}}</span>
        </li>
    </ul>
  </div>
</template>

<script>
	export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object
      }
    }
	}
</script>

<style>
  .base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .goods-price .new-price{
    color:red;
    font-size: 24px;
  }
  .goods-price .old-price{
    color: gray;
    text-decoration: line-through;
  }
  .sales-volume {
    list-style-type:none;
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: #999 1px solid;
  }
  .type-price{
    color: white;
  }
  .services{
    list-style-type:none;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }
  .services-items{
    /* flex: 1; */
  }
  .services-items img{
    position: relative;
    top: 2px;
    width: 14px;
    height: 14px;
  }


</style>