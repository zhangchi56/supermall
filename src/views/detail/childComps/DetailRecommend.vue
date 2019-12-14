<template>
  <div class="recommend">
    <div class="title">热门推荐</div>
    <div><goods-list :pops="recommend.list"></goods-list></div>
  </div>
</template>

<script>
import GoodsList from 'content/goods/GoodsList'

export default {
  props:{
    recommend:{
      type: Object,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      
    }
  },
  components:{
    GoodsList
  }
  
}
</script>

<style scoped>
 .recommend{
   margin-top: 15px;
   padding: 0 8px;
   color: #999;
   border-bottom: 5px solid #f2f5f8;
 }
</style>