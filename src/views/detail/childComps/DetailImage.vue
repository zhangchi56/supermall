<template>
  <div v-if="Object.keys(detailImage).length !== 0" class="detail-image">
    <div v-for="(item, index) in detailImage" :key="index">
      <div class="desc">{{item.desc}}</div>
      <div class="key">{{item.key}}</div>
      <div class="image" v-for="(img, index) in item.list" :key="index">
        <img :src="img" alt @load="ImgLoad" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailImage: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    ImgLoad() {
      this.$emit("ImgLoad");
    }
  }
};
</script>

<style>
.detail-image {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.image > img {
  width: 100%;
}
</style>