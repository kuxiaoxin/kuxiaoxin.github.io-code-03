<template>
  <div class="card-body">
    <!--<img style="width: 256px;height: 256px;" src="../assets/image/specialCard/sword.png" alt="">-->
    <div class="card-body-image-box">
      <img class="card-body-image" src="http://www.lishichunqiu.com/zt/sgssmz/sgssmz.jpg"
           alt="">
    </div>
    <div style="padding: 16px;border-top: 1px solid #e8eaec;">
      <div class="card-text">历数三国时期的少数民族</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SpecialCard"
  }
</script>

<style scoped>
  .card-body {
    border: 1px solid #dcdee2;
    background: #fff;
    border-radius: 4px;
    font-size: 14px;
    position: relative;
    transition: all .5s ease-in-out;
  }

  .card-body-image-box {
    padding: 8px 8px 3px;
  }

  .card-body-image {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    width: 240px;
    height: 240px;
  }

  .card-body:hover {
    box-shadow: 0 0 10px #888888;
  }

  .card-body:hover .card-text {
    font-size: 17px;
  }

  .card-text {
    font-size: 15px;
    transition: all .3s ease-in-out;
    font-weight: bold;
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
</style>