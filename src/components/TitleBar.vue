<template>
  <div class="title-box">
    <img class="title-image" src="../assets/image/titleBar/title-bar-left.png" alt="标题图">
    <div class="title-text-box">
      <div class="title-text">最近文章</div>
      <i class="title-i"></i>
      <img class="title-text-image" src="../assets/image/titleBar/text/recentArticles.png" alt="文字图片">
    </div>
    <img class="title-image" src="../assets/image/titleBar/title-bar-right.png" alt="标题图">
  </div>
</template>

<script>
  export default {
    name: "TitleBar"
  }
</script>

<style scoped>
  .title-box {
    text-align: center;
    margin: 96px 0;
    display: flex;
    justify-content: center;
  }

  .title-text-box {
    margin: 0 32px;
  }

  .title-text {
    font-size: 22px;
    font-weight: bold;
    color: #333;
    letter-spacing: 16px;
    margin-right: -16px;
  }

  .title-i {
    width: 100%;
    height: 3px;
    background: #333;
    display: block;
  }

  .title-text-image {
    height: 48px;
    margin: -10px 0;
  }

  .title-image {
    width: 64px;
    /*background: #515a6e;*/
  }
</style>