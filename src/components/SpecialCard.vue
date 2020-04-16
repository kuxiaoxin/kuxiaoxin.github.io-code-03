<template>
  <div class="card-box">
    <div class="card-type">类别</div>
    <div class="card-image-box">
      <img class="card-image" src="http://www.lishichunqiu.com/zt/sgssmz/sgssmz.jpg" alt="图片">
    </div>
    <div><Icon type="md-time" />2020-04-16</div>
    <div>历数三国时期的少数民族</div>
    <div>历数三国时期的少数民族历数三国时期的少数民族历数三国时期的少数民族历数三国时期的少数民族历数三国时期的少数民族</div>
  </div>
</template>

<script>
  export default {
    name: "SpecialCard"
  }
</script>

<style scoped>
  .card-box {
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
</style>