<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control class="tab-control2" ref="tabControl2" :titles="['流行','新歌','精选']" @tabClick="tabClick" v-show="tabControlisShow" :class="{tabControlclone: tabControlisShow}"></tab-control>
    <scroll class="home-scroll" 
            ref="scroll" 
            :probeType="3" 
            @scroll="homeScroll" 
            :pullUpLoad="true" 
            @pullingUp="loadMore">
      <home-swiper class="home-swiper" :banners="banners" @homeSwiperimageLoad="homeSwiperimageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-control1" ref="tabControl1" :titles="['流行','新歌','精选']" @tabClick="tabClick"></tab-control>
      <goods-list :pops="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="backTopIsTrue"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "views/home/childComps/HomeSwiper";
import RecommendView from "views/home/childComps/RecommendView";
import FeatureView from "views/home/childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";
// import { debounce } from "@/common/utils";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      backTopIsTrue: false,
      tabOffsetTop: 0,
      tabControlisShow: false
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata();
    //2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    
  },
  mounted() {
    //3.监听item中图片加载完成
    this.$bus.$on("imageLoad",() => {
      this.$refs.scroll.refresh()
      console.log("待防抖优化")
    })
  },
  methods: {
    /**
     * 事件监听的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // console.log(this.$refs.tabControl1.currentIndex)  老师加了这两句话，我试了，好像没必要加
      // console.log(this.$refs.tabControl2.currentIndex)
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    homeScroll(position) {
      this.backTopIsTrue = -position.y > 1000;
      
      this.tabControlisShow = -position.y > this.tabOffsetTop
    },
    loadMore(){
      // console.log("加载更多")
      this.getHomeGoods(this.currentType)
      //反馈加载完成
      this.$refs.scroll.finishPullUp()
    },
    homeSwiperimageLoad(){
      this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop
    },


    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        console.log(res)
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;


      });
    }
  },
  updated() {
    // console.log(this.currentType)
  },
};
</script>

<style scope>
  #home {

  }
  .home-nav {
    background-color: var(--color-tint);
    color: white;
    width: 100%;
    position: relative;
  }
  .tabControlclone{
    position: relative;
    z-index: 9;
  }
  .home-scroll {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>