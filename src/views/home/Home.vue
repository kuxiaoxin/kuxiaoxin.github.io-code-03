<template>
  <div class="home">
    <div class="top-image-box">
      <img class="top-image" src="../../assets/image/home/nav-background.jpg" alt="首页图片">
      <div class="top-image-mask"></div>
      <div class="poetry-box wow slideInUp" data-wow-duration="1s">
        <h2>《临江仙》</h2>
        <i class="poetry-box-i"></i>
        <h3>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空。</h3>
        <h3>青山依旧在，几度夕阳红。</h3>
        <h3>白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢。</h3>
        <h3>古今多少事，都付笑谈中。</h3>
      </div>
    </div>
    <Row style="margin-top: 64px" :gutter="48">
      <i-col span="8">
        <special-card></special-card>
      </i-col>
      <i-col span="8">
        <special-card></special-card>
      </i-col>
      <i-col span="8">
        <special-card></special-card>
      </i-col>
    </Row>
  </div>
</template>

<script>
  import SpecialCard from "@/components/SpecialCard"
  import { WOW } from "wowjs";

  export default {
    name: 'Home',
    components: {
      SpecialCard
    },
    mounted() {
      let wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true
      })
      wow.init();
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

  .poetry-box {
    position: absolute;
    color: #fff;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    margin-bottom: 240px;
  }

  .poetry-box-i {
    height: 3px;
    width: 240px;
    background: white;
    display: inline-block;
    margin-bottom: 3px;
  }
</style>
