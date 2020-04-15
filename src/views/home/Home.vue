<template>
  <div class="home">
    <div class="top-image-box">
      <img class="top-image" src="../../assets/image/home/nav-background.jpg" alt="首页图片">
      <div class="top-image-mask"></div>
    </div>
    <empty-div title="首页"></empty-div>
  </div>
</template>

<script>
  import EmptyDiv from "@/components/EmptyDiv"

  export default {
    name: 'Home',
    components: {
      EmptyDiv
    }
  }
</script>

<style scoped>
  .top-image-box {
    position: relative;
    overflow: hidden;
  }

  .top-image {
    width: 100%;
    height: auto;
    margin-bottom: -5px;
  }

  .top-image-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0.9;
  }
</style>
