<template>
  <div class="card-body">
    <img style="width: 100%" src="../assets/image/specialCard/sword.png" alt="">
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

  .card-body:hover {
    box-shadow: 0 0 10px #888888;
  }
</style>