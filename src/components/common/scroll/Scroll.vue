<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
        <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return{
        scroll: null
      }
    },
    mounted() {
      setTimeout(this.__initScroll, 20)
    },
    methods: {
      //初始化BScroll对象
      __initScroll(){
        //1.创建BScroll对象
        this.scroll = new BScroll(this.$refs.wrapper,{
          click: true,
          probeType: this.probeType, //监听0123状态
          pullUpLoad: this.pullUpLoad //监听上拉加载更多是否完成
        })
        //2.监听滚动的位置
        if(this.probeType === 2 || this.probeType ===3) {
          this.scroll.on('scroll',(position) => {
            this.$emit("scroll",position)
          })
        }
        //3.监听上拉事件
        if(this.pullUpLoad) {
          this.scroll.on('pullingUp', () => {
            //上拉加载更多
            this.$emit('pullingUp')
          })
        }
      },


      scrollTo(x,y,time=300){
        this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll && this.scroll.refresh && this.scroll.refresh()
      }
    },
  }
</script>

<style scope>

</style>