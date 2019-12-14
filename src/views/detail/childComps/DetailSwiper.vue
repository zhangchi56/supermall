<template>
      <!-- swiper -->
      <swiper v-if="topImages.length>0" :options="swiperOption" class="detailSwiper">
        <swiper-slide v-for="(item, index) in topImages" :key="index"><img @load="detailSwiperRefresh" :src="topImages[index]" alt=""></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
</template>

<script>
  export default {
    props:{
      topImages:{
        type: Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        swiperOption: {
          loop: true,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',            
          }
        }
      }
    },
    methods: {
      //当图片加载完时，去DEtail重新刷新一下页面高度
      detailSwiperRefresh(){
        this.$emit("detailSwiperRefresh")
      }
    },
  }
</script>

<style scope>
  .detailSwiper{
    height: 300px;
  }
  .detailSwiper img{
    width: 100%;
  }
</style>