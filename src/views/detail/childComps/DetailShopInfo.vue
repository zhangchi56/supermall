<template>
  <div class="shop">
    <div class="shop-logo">
      <img :src="shopInfo.shopLogo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-data">

      <div class="cSells">
        <div class="num">
          {{shopInfo.cSells | sellCountFilter}}
        </div>
        <div class="desc">
          总销量
        </div>

      </div>

      <div class="cGoods">
        <div class="num">
          {{shopInfo.cGoods}}
        </div>
        <div class="desc">
          全部宝贝
        </div>
      </div>
      <table class="score">
        <tr class="score-info" v-for="(item, index) in shopInfo.score" :key="index">
          <td>{{item.name}}</td>
          <td :style="'color: '+(item.isBetter ? 'red':'green')">{{item.score}}</td>
          <td><span :style="'background: '+(item.isBetter ? 'red':'green')">{{item.isBetter ? '高':'低'}}</span></td>
        </tr>
      </table>
    </div>
    <button class="shop-button">进店逛逛</button>
  </div>
</template>

<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  filters: {
    sellCountFilter: function(value){
      if(value<10000) return value;
      return (value/10000).toFixed(1) + '万'
    }
  }
};
</script>

<style scope>
  .shop{
    padding: 25px 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .shop-logo{

  }
  .shop-logo img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
    vertical-align: middle;
    margin-right: 15px;
  }
  .shop-data{
    display: flex;
    align-items: center;
    padding: 20px 0;
    /* justify-content: space-between */
  }
  .cSells{
    /* margin-left: 50px; */
    flex: 1;
    text-align: center;
  }
  .cGoods{
    flex: 1;
    text-align: center;
    border-right: 1px gray solid;
  }
  .score{
    /* flex: 1; */
    padding: 0 24px;
  }
  .score-info>td{
    padding: 0 5px 5px 0;
  }
  .cSells>.num{
    padding-bottom: 10px;
  }
  .cGoods>.num{
    padding-bottom: 10px;
  }
  .score-info>td>span{
    color: white;
  }
  .shop-button{
    width:120px;
    height: 30px;
    border-radius: 10%;
    border: white;
    background-color: rgb(233, 233, 233);
    display: block;
    margin:0 auto;
  }
</style>