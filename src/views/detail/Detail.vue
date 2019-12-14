<template>
  <div id="detail">
    <!-- 我是详情页 -->
    <detail-nav-bar @currentTitle="currentTitle" class="detail-nav-bar" ref="nav"></detail-nav-bar>
    
    <scroll ref="scroll" class="detail-scroll" :probeType="3" @scroll="backScroll">
      <detail-swiper @detailSwiperRefresh="detailSwiperRefresh" :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <detail-image :detailImage="detailImage" @ImgLoad="ImgLoad"></detail-image>
      <detail-item-params ref="params" :itemParams="itemParams"></detail-item-params>
      <detail-rate ref="rate" :rate="rate"></detail-rate>
      <detail-recommend ref="recommend" :recommend="recommend"></detail-recommend>
    </scroll>

    <back-top @click.native="backClick" v-if="backTopIsTrue" class="back-top"></back-top>
    
    <detail-nav-bar-bottom @clickAddCart="clickAddCart"></detail-nav-bar-bottom>
    <!-- 加下面这句话，再点一下加入购物车按钮，DetailBavBarBottom就不见了！！！！！！！！！！！！！！！！ -->
    <!-- <ul>
      <li v-for="(item, index) in $store.state.cartList" :key="index">
        {{item}}
      </li>
    </ul> -->
    
  </div>
</template>

<script>
import DetailNavBar from "views/detail/childComps/DetailNavBar";
import DetailSwiper from "views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "views/detail/childComps/DetailShopInfo";
import DetailImage from "views/detail/childComps/DetailImage";
import DetailItemParams from "views/detail/childComps/DetailItemParams";
import DetailRate from "views/detail/childComps/DetailRate";
import DetailRecommend from "views/detail/childComps/DetailRecommend";
import DetailNavBarBottom from "views/detail/childComps/DetailNavBarBottom";

import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getDetailData, getDetailRecommend, Goods } from "network/detail";
import { backTop } from "@/common/mixin";
import { debounce } from "@/common/utils";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopInfo: {},
      detailImage: [],
      itemParams: {},
      rate: {},
      recommend: {},
      backTopIsTrue: false,
      navBarsHeight:[],
      currentIndex:null,
      getTopY:null
    };
  },
  mixins: [backTop],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll,
    DetailShopInfo,
    DetailImage,
    DetailItemParams,
    DetailRate,
    DetailRecommend,
    BackTop,
    DetailNavBarBottom
  },
  created() {
    //发送网络请求数据
    this.iid = this.$route.params.iid;
    // console.log(this.iid)
    getDetailData(this.iid).then(res => {
      const data = res.data.result;
      console.log(data)
      this.topImages = data.itemInfo.topImages;
      //把杂乱数据通过面向对象做整合，方便数据的使用
      this.goods = new Goods(
        data.columns,
        data.detailInfo,
        data.itemInfo,
        data.shopInfo.services
      );
      this.itemInfo = data.itemInfo
      this.shopInfo = data.shopInfo;
      this.detailImage = data.detailInfo.detailImage;
      this.itemParams = data.itemParams;
      this.rate = data.rate;
    }),
      getDetailRecommend().then(res => {
        const data = res.data.data;
        this.recommend = data;
        // console.log(this.recommend);
      });
      //防抖操作，给getTopY赋值 
      this.getTopY = debounce(() => {
        
        this.navBarsHeight = []
        this.navBarsHeight.push(0)
        this.navBarsHeight.push(this.$refs.params.$el.offsetTop)
        this.navBarsHeight.push(this.$refs.rate.$el.offsetTop)
        this.navBarsHeight.push(this.$refs.recommend.$el.offsetTop)
        this.navBarsHeight.push(Number.MAX_VALUE)
        // console.log(this.navBarsHeight)
      },300)
  },
  methods: {
    //重新刷新页面高度
    detailSwiperRefresh() {
      this.$refs.scroll.refresh();
    },
    ImgLoad() {
      this.$refs.scroll.refresh();
      //获取tab里面商品，参数，评论，推荐的高度y 只有这里才能获取准确的值
        // this.navBarsHeight = []
        // this.navBarsHeight.push(0)
        // this.navBarsHeight.push(this.$refs.params.$el.offsetTop)
        // this.navBarsHeight.push(this.$refs.rate.$el.offsetTop)
        // this.navBarsHeight.push(this.$refs.recommend.$el.offsetTop)
        // this.navBarsHeight.push(Number.MAX_VALUE)
        // console.log(this.navBarsHeight)
        //为什么使用防抖函数后，值可以写在create的防抖函数里面？
      this.getTopY()
      
    },
    //实时监听滑动的高度
    backScroll(position){
      let positionY = -position.y

      this.backTopIsTrue = positionY > 1000;
      
      for (let index = 0; index < this.navBarsHeight.length-1; index++) {
        // const element = this.navBarsHeight[index];
        // console.log(element)
        if((index !== this.currentIndex) && (positionY>=this.navBarsHeight[index] && positionY<this.navBarsHeight[index+1])){
          // console.log(index)
          this.currentIndex = index
          this.$refs.nav.currentIndex = index
        }
      }
    },
    currentTitle(index){
      //老师的编程思路，一行代码解决我自己写的 13行代码！！！！！！！！！！！！！！
      this.$refs.scroll.scrollTo(0,-this.navBarsHeight[index],300)

      // switch (index) {
      //   case 0:
      //     this.$refs.scroll.scrollTo(0,0,300)
      //     break;
      //   case 1:
      //     this.$refs.scroll.scrollTo(0,-this.navBarsHeight[1],300)
      //     break;
      //   case 2:
      //     this.$refs.scroll.scrollTo(0,-this.navBarsHeight[2],300)
      //     break;
      //   case 3:
      //     this.$refs.scroll.scrollTo(0,-this.navBarsHeight[3],300)
      //     break;
      
      //   default:
      //     break;
      // }
    },
    clickAddCart(){
      //1.获取购物车需要的展示信息
      const product = {}
      product.image = this.topImages[0];
      product.title = this.itemInfo.title;
      product.desc = this.itemInfo.desc;
      product.price = this.itemInfo.highNowPrice;
      product.iid = this.iid;

      this.$store.dispatch('addCart',product).then(res => {
        this.$toast.show(res)
      })
    }
  },
  mounted() {
    //重新刷新页面高度
    this.$bus.$on("DetailImageLoad",() => {
      this.$refs.scroll.refresh()
    })
  }
};
</script>

<style scope>
  #detail {
    position: relative;
    height: 100vh;
    background-color: #fff;
    z-index: 1;
    /* height: 100vh; */
  }
  .detail-nav-bar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .detail-scroll {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0px;
    /* z-index: -1; */
  }
</style>