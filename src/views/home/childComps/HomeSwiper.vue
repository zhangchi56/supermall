<template>
  <swiper v-if="banners.length>0" :options="swiperOption" class="homeSwiper">
    <swiper-slide v-for="(item,index) of banners" :key="index">
      <a :href="item.link"><img :src="item.image" alt @load="imageLoad" /></a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: "HomeSwiper",
    props: ["banners"],
    data() {
      return {
        isLoad: false,
        swiperOption: {
          loop: true,
          autoplay: {
            loop:true,
            delay: 3000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',            
          }
        }
      };
    },
    methods: {
      imageLoad() {
        if (!this.isLoad) {
          this.$emit("homeSwiperimageLoad");
          this.isLoad = true;
          // console.log("4次打印无法解决")
        }
      }
    },
    created() {
      // console.log(this.banner)
    }
  };
</script>

<style scope>
  .homeSwiper img {
    width: 100%;
  }
  .homeSwiper .swiper-pagination-bullet-active{
    background:red;
  }
</style>