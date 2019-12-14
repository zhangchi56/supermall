<template>
  <div v-if="Object.keys(rate).length !== 0" class="detail-rate">
    <div class="comment-head">
      <div>用户评价</div>
      <div>更多></div>
    </div>
    <div v-for="(item, index) in rate.list" :key="index">
      <div class="user-info">
        <div class="user-avatar">
          <img :src="item.user.avatar" alt />
          <span class="user-name">{{item.user.uname}}</span>
        </div>
      </div>
      <div class="user-comment">
        <div>{{item.content}}</div>
        <div class="create-time">
          <span>{{item.created | formatDateRate}}</span>
          <span>{{item.style}}</span>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from '@/common/utils'

export default {
  props: {
    rate: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  updated() {
    // console.log(this.rate);
  },
  methods: {
    
  },
  filters: {
    formatDateRate(value){
      let date = new Date(value*1000)
      return formatDate(date,"yyyy-MM-dd")
    }
  }
};
</script>

<style>
.detail-rate {
  margin-top: 15px;
  padding: 0 15px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.comment-head {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px #999 solid;
  padding-bottom: 20px;
}
.user-avatar>img{
  width: 50px;
  height: 50px;
  vertical-align: middle;
  margin: 20px 20px 20px 0;
}
</style>