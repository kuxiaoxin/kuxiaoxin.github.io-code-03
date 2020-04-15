<template>
  <div class="card-body">
    <!--<img style="width: 256px;height: 256px;" src="../assets/image/specialCard/sword.png" alt="">-->
    <img class="card-body-image" src="http://www.lishichunqiu.com/zt/sgssmz/sgssmz.jpg"
         alt="">
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
    border: 1px solid #e8eaec;
    background: #fff;
    border-radius: 4px;
    font-size: 14px;
    position: relative;
    transition: all .5s ease-in-out;
  }

  .card-body-image {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    width: 256px;
    height: 256px;
    margin-bottom: -5px;
  }

  .card-body:hover {
    box-shadow: 0 0 10px #888888;
  }

  .card-text {
    font-weight: bold;
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
</style>