<template>
  <!--http://www.e3ol.com/culture/html/2016-10/25941/25941_20161028.shtml-->
  <div style="display: flex">
    <div class="image-box">
      <img style="width: 100%;" :src="image" alt="">
    </div>
    <div class="text-box">
      <h2>{{title}}</h2>
      <div style="font-size: 18px;margin: 4px 0;">
        <span style="display: inline-flex;justify-content: center;align-items: center;">
          <Icon type="md-time"/>
          <span style="margin-left: 4px">{{time}}</span>
        </span>
        <span style="display: inline-flex;justify-content: center;align-items: center;margin-left: 16px;">
          <Icon type="md-eye"/>
          <span style="margin-left: 4px">{{heat}}</span>
        </span>
      </div>
      <div class="text-overflow">{{describe}}</div>
      <!--<i-button style="position: absolute;bottom: 0;left: 50%">阅读本文</i-button>-->
      <div class="read-btn">阅读本文</div>
      <div class="read-btn-text" @click="onReadArticle">阅读本文</div>
    </div>
  </div>
</template>

<script>
  export default {
    // 文章卡片
    name: "ArticleCard",
    props: {
      title: {
        type: String,
        default: '刘禅追谥尚欠赵云一个正点'
      },
      image: {
        type: String,
        default: 'http://www.e3ol.com/biography/pic/id/240/19.jpg'
      },
      time: {
        type: String,
        default: '2020-04-01'
      },
      heat: {
        type: String,
        default: '1.2k'
      },
      describe: {
        type: String,
        default: '君主时代帝王死后，会依据他生前的所作所为给他一个定性类的称号，' +
          '对于一些重要的大臣来说，也会得到这样的待遇，称之为谥号。这是一种盖棺论' +
          '定，尤其对于大臣，能获得谥号表明位高权重或者是功劳大，所以，这是一种身' +
          '后的荣耀。蜀汉国实际建国时间相对较晚还短，获得谥号的大臣只有六人，后来' +
          '刘禅又追谥了几人，前后总共不过十几个人。赵云就是这几个被追谥的大臣之一。'
      },
      routerName: {
        type: String,
        default: ''
      }
    },
    methods: {
      onReadArticle() {
        if (this.routerName) this.$router.push({name: this.routerName})
      }
    }
  }
</script>

<style scoped>

  .image-box {
    height: 180px;
    width: 280px;
    overflow: hidden;
    border-radius: 4px;
    margin-right: 16px;
    flex-grow: 0;
    flex-shrink: 0;
  }

  .text-box {
    height: 180px;
    display: inline-block;
    position: relative;
  }

  .text-overflow {
    font-size: 17px;
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  .read-btn {
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -60px;
    width: 120px;
    border-radius: 4px;
    padding: 6px;
    background: url("../assets/image/articleCard/btn_background.png") no-repeat 80px -5px;
    background-size: 65px;
    opacity: 0.4;
    color: rgba(0, 0, 0, 0);
    text-align: center;
    user-select: none;
    transition: opacity .5s;
  }

  .read-btn-text {
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -60px;
    width: 120px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 6px;
    transition: all .5s ease-in-out;
    cursor: pointer;
  }

  .read-btn-text:hover .read-btn {
    display: block;
    opacity: 1;
  }

  .read-btn-text:hover {
    box-shadow: 0 0 0 1em rgba(30, 144, 255, 0);
    border-color: #2d8cf0;
    color: #2d8cf0;
  }
</style>