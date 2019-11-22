<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="home-scroll" 
            ref="homeScroll" 
            :probeType="3" 
            @scroll="homeScroll" 
            :pullUpLoad="true" 
            @pullingUp="loadMore">
      <home-swiper class="home-swiper" :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-control" :titles="['流行','新歌','精选']" @tabClick="tabClick"></tab-control>
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
      backTopIsTrue: false
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
    },

    backClick() {
      this.$refs.homeScroll.scrollTo(0, 0, 500);
    },

    homeScroll(position) {
      this.backTopIsTrue = -position.y > 1000;
    },
    loadMore(){
      // console.log("加载更多")
      this.getHomeGoods(this.currentType)
      this.$refs.homeScroll.finishPullUp()
      
      this.$refs.scroll.scroll.refresh()

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
        // console.log(res)
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
  padding-top: 44px;
  /* height: 100vh; */
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
/* .tab-control {
    position: sticky;
    top: 44px;
    background-color: #fff;
    z-index: 1;
  } */
.home-scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

/* .home-scroll {
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top:44px;
  } */
</style>