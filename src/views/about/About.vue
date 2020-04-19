<template>
  <div class="about">
    <breadcrumb-route></breadcrumb-route>
    <div style="width: 1200px;position: relative">
      <img style="width: 100%;margin-bottom: -5px;" src="../../assets/image/about/about-top.jpeg" alt="">
      <div class="top-image-mask"></div>
      <div class="poetry-box wow slideInUp" data-wow-duration="1s">
        <h2>独善其身尽日安，何须千古名不朽！</h2>
        <i class="poetry-box-i"></i>
        <h2>本网站为我个人兴趣爱好所建，只为能好的总结出《三国演义》中真正的人生真谛。也希望能帮助其他喜欢《三国演义》的朋友探寻更多三国内容。</h2>
      </div>
    </div>
  </div>
</template>

<script>
  import BreadcrumbRoute from "@/components/BreadcrumbRoute"
  import { WOW } from "wowjs";

  export default {
    name: 'About',
    components: {
      BreadcrumbRoute
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

<style>
  .top-image-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0.9;
  }
  .poetry-box{
    position: absolute;
    color: #fff;
    bottom: 0;
    left: 50%;
    margin-left: -300px;
    width: 600px;
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