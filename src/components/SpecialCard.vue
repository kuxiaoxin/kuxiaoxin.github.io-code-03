<template>
  <div class="card-box">
    <div class="card-type">{{type}}</div>
    <div class="card-image-box">
      <img class="card-image" :src="image" alt="图片">
    </div>
    <h3 class="card-title">{{title}}</h3>
    <div class="card-time">
      <Icon type="md-time"/>
      <span style="margin-left: 4px">{{time}}</span>
    </div>
    <div style="padding: 0 32px 16px">
      <div class="card-describe">{{describe}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    // 首页特殊卡片
    name: "SpecialCard",
    props: {
      type: {
        type: String,
        default: '类型'
      },
      title: {
        type: String,
        default: '标题'
      },
      image: {
        type: String,
        default: 'http://www.lishichunqiu.com/zt/sgssmz/sgssmz.jpg'
      },
      time: {
        type: String,
        default: '****-**-**'
      },
      describe: {
        type: String,
        default: '描述描述描述描述描述' +
          '描述描述描述描述描述描述描述' +
          '描述描述描述描述描述描述描述' +
          '描述描述描述描述描述描述描述' +
          '描述描述描述描述描述描述'
      }
    }
  }
</script>

<style scoped>
  .card-box {
    font-size: 16px;
    background: #fff;
    border-radius: 15px;
    position: relative;
    width: 100%;
    box-shadow: 0 0.25rem 1rem rgba(48, 55, 66, .15);
    transition: all .5s ease-in-out;
    text-align: center;
  }

  .card-box:hover {
    box-shadow: 0 0 10px #888888;
  }

  .card-type {
    color: #fff;
    border-radius: 16px;
    position: absolute;
    top: -16px;
    left: 50%;
    margin-left: -48px;
    height: 32px;
    background: #ed4014;
    width: 112px;
    line-height: 32px;
    font-size: 17px;
    font-weight: bold;
  }

  .card-image-box {
    height: 225px;
    width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    overflow: hidden;
  }

  .card-image {
    width: 100%;
  }

  .card-time {
    padding: 8px 16px 8px;
  }

  .card-title {
    padding: 8px 16px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .card-describe {
    text-align: left;
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }


</style>