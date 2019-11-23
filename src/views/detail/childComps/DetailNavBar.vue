<template>
  <div>
    <nav-bar class="Nav">
      <div slot="left" @click="NavBack"><img src="~assets/img/common/back.svg" alt="" class="NavImg"></div>
      <div class="NavBar" slot="center">
        <div class="NavBarItem" v-for="(item, index) in titles" :key="index" :class="{active: index == currentIndex}" @click="CurrentIndex(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    data() {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    components:{
      NavBar
    },
    methods: {
      CurrentIndex(index){
        this.currentIndex = index
      },
      NavBack(){
        this.$router.back()
      }
    },
  }
</script>

<style scope>
  .Nav{
    box-shadow: 0 1px 1px rgba(100,100,100,.08);
  }
  .NavBar{
    display: flex;
  }
  .NavBarItem{
    flex: 1;
  }
  .active {
    color: red
  }
  .NavImg{
    vertical-align: middle;
  }
</style>