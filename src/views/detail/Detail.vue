<template>
  <div>
    <!-- 我是详情页 -->
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>
  import DetailNavBar from 'views/detail/childComps/DetailNavBar'
  export default {
    data() {
      return {
        iid: null
      }
    },
    components:{
      DetailNavBar
    },
    created() {
      this.iid = this.$route.params.iid
    },
  }
</script>

<style>

</style>