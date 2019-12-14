<template>
  <div v-if="Object.keys(itemParams).length !==0" class="detail-item-params">
    <table>
      <tr class="keys" v-for="(item, index) in itemParams.info.set" :key="index">
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props:{
    itemParams:{
      type:Object,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
 .detail-item-params{
   margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
 }
  .keys>td:first-child{
    width: 60px;
  }
</style>