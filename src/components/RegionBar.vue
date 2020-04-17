<template>
  <div class="box">
    <!--<div class="box-border"></div>-->
    <div class="box-left"></div>
    <div class="box-center">
      <div style="height: 100%;display: inline-flex;justify-content: center;align-items: center;margin: 0 7px 0 0;">
        <img class="box-image" src="../assets/image/regionBar/regionBar.svg" alt="">
      </div>
      <div style="height: 100%;display: inline-flex;justify-content: center;align-items: center;">
        {{title}}
      </div>
    </div>
    <div class="box-right"></div>
    <!--<div class="box-border"></div>-->
  </div>
</template>

<script>
  export default {
    // 区域标题栏
    name: "RegionBar",
    props: {
      title: {
        type: String,
        default: '标题'
      }
    }
  }
</script>

<style scoped>
  .box {
    font-size: 16px;
    font-weight: bold;
    display: flex;
  }

  .box-left {
    flex-grow: 0;
    flex-shrink: 0;
    width: 6px;
    background: url("../assets/image/regionBar/gw_left.png") no-repeat;
    height: 37px;
  }

  .box-center {
    flex-grow: 1;
    flex-shrink: 0;
    background: url("../assets/image/regionBar/gw_center.png") repeat-x;
    height: 37px;
    color: white;
    display: flex;
  }

  .box-right {
    flex-grow: 0;
    flex-shrink: 0;
    height: 37px;
    width: 6px;
    background: url("../assets/image/regionBar/gw_right.png") no-repeat;
  }

  .box-image {
    height: 24px;
    width: 24px;
  }
</style>