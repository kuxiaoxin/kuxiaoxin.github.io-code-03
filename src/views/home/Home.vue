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
    <title-bar></title-bar>
    <Row style="margin-top: 16px" :gutter="48" type="flex" justify="center" align="middle">
      <i-col span="8">
        <special-card style="margin-bottom: 48px"
                      type="趣谈"
                      title="历数三国时期的少数民族"
                      time="2020-04-16"
                      describe="三国时期主要的异族势力有匈奴、乌桓、羌、氐、山越和南蛮。这些特殊的势力加入乱世的角逐，对三国格局起了微妙的影响作用。一个蛮族的实力要从其经济、政治基础、科技和武装上来衡量，都还不可能马上入主中原。"></special-card>
      </i-col>
      <i-col span="8">
        <special-card style="margin-bottom: 48px"
                      type="趣谈"
                      title="历数三国时期的少数民族"
                      time="2020-04-16"
                      describe="哈哈哈哈"></special-card>
      </i-col>
      <i-col span="8">
        <special-card style="margin-bottom: 48px"
        ></special-card>
      </i-col>
      <i-col span="8">
        <special-card style="margin-bottom: 48px"
                      type="趣谈"
                      title="历数三国时期的少数民族"
                      time="2020-04-16"
                      describe="哈哈哈哈"></special-card>
      </i-col>
      <i-col span="8">
        <special-card style="margin-bottom: 48px"
        ></special-card>
      </i-col>
      <i-col span="8">
        <special-card style="margin-bottom: 48px"
        ></special-card>
      </i-col>
    </Row>
  </div>
</template>

<script>
  import SpecialCard from "@/components/SpecialCard"
  import TitleBar from "@/components/TitleBar"
  import { WOW } from "wowjs";

  export default {
    name: 'Home',
    components: {
      SpecialCard,
      TitleBar
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
