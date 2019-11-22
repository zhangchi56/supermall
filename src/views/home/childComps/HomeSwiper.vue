<template>
  <swiper>
    <!-- slides -->
    <swiper-slide v-for="(item,index) of banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          pagination: {
          el: '.swiper-pagination',
        },
        }
    }
  },
  components: {
      swiper,
      swiperSlide
  },
  props: ["banners"],
  created() {
      // console.log(this.banner)
  }
}
</script>

<style scope>
  .swiper-wrapper img{
    width: 100%;
  }
</style>