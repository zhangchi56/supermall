<template>
  <div id="app">
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from 'content/mainTabbar/MainTabBar'
  export default {
    name:'app',
    components: {
      // MainTabBar
      MainTabBar
    }
    
  }
</script>

<style>
  @import "assets/css/base.css";

  .main-tab-bar {
    position:fixed;
    z-index: 1;
  }
</style>
