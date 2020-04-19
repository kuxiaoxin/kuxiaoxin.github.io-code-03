<template>
  <div>
    <region-bar title="推荐" style="margin-bottom: 16px;"></region-bar>
    <div v-for="(item, index) in recommendList" :key="index">
      <div class="recommend-box">
        <img class="recommend-box-image" :src="item.image" alt="">
      </div>
      <div class="recommend-box-text">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  import RegionBar from "@/components/RegionBar"

  export default {
    name: "RecommendLayout",
    props: {
      recommendList: {
        type: Array,
        required: true
      }
    },
    components: {
      RegionBar
    }
  }
</script>

<style scoped>
  .recommend-box {
    width: 100%;
    height: 180px;
    overflow: hidden;
    margin-bottom: 8px;
    border-radius: 4px;
  }

  .recommend-box-image {
    width: 100%;

  }

  .recommend-box-text {
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 8px;
  }
</style>