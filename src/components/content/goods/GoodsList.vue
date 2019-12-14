<template>
  <div class="goods-list">
    <!-- {{pops}} -->
    <goods-list-item class="goods-list-item" v-for="(item,index) of pops" :key="index" :goodsItem="item"></goods-list-item>
    
  </div>
</template>

<script>
import GoodsListItem from 'components/content/goods/GoodsListItem'

  export default {
    props: {
      pops: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodsListItem
    },
    mounted(){
      
    }
  }
</script>

<style scope>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .goods-list-item {
    width: 48%;
  }
</style>