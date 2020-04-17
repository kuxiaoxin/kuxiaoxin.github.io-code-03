<template>
  <div class="title-box">
    <div class="title-image-box">
      <img class="title-image" src="../assets/image/titleBar/title-bar-left.png" alt="标题图">
    </div>
    <div class="title-text-box">
      <div class="title-text">{{title}}</div>
      <i class="title-i"></i>
      <slot></slot>
    </div>
    <div class="title-image-box">
      <img class="title-image" src="../assets/image/titleBar/title-bar-right.png" alt="标题图">
    </div>
  </div>
</template>

<script>
  export default {
    // 双龙头标题
    name: "TitleBar",
    props: {
      title: {
        type: String,
        default: '文章标题'
      }
    }
  }
</script>

<style scoped>
  .title-box {
    text-align: center;
    margin: 96px 0 64px;
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

  .title-image-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
  }

  .title-image {
    width: 64px;
    /*background: #515a6e;*/
  }
</style>