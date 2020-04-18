<template>
  <div class="about">
    <breadcrumb-route></breadcrumb-route>
    <div style="width: 1200px;position: relative">
      <img style="width: 100%;margin-bottom: -5px;" src="../../assets/image/about/about-top.jpeg" alt="">
      <div class="top-image-mask"></div>
    </div>
  </div>
</template>

<script>
  import BreadcrumbRoute from "@/components/BreadcrumbRoute"

  export default {
    name: 'About',
    components: {
      BreadcrumbRoute
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
</style>