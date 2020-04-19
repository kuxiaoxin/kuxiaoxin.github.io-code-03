<template>
  <div>
    <region-bar title="排行板"></region-bar>
    <div v-for="(item, index) in rankingList" :key="index" class="region-title">
      <a href="#" style="color: #515a6e" @click="onRead(item.routerName)">
        {{index+1}}.{{item.title}}
      </a>
    </div>
  </div>
</template>

<script>
  import RegionBar from "@/components/RegionBar"

  export default {
    name: "RankingLayout",
    props: {
      rankingList: {
        type: Array,
        required: true
      }
    },
    components: {
      RegionBar
    },
    methods: {
      onRead(routerName) {
        this.$router.push({name: routerName})
      }
    }
  }
</script>

<style scoped>
  .region-title {
    padding: 8px;
    line-height: 24px;
    font-size: 17px;
  }
</style>