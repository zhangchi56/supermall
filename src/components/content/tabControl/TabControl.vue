<template>
  <div class="tab-control">
    <div class="tab-control-item" :class="{active: index === current}" v-for="(item,index) of titles" :key="index" @click="getCurrentIndex(index)"><span>{{item}}</span></div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        current:0
      }
    },
    methods: {
      getCurrentIndex(index){
        this.current = index
        this.$emit('tabClick',index)
      }
    },
  }
</script>

<style>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
  }
  .tab-control span {
    padding: 5px;
  }
  .tab-control-item{
    flex: 1;
  }
  .active span{
    color: pink;
    border-bottom: 2px pink solid;
  }

</style>