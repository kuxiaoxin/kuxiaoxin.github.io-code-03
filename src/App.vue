<template>
  <div id="app">
    <div class="nav-box">
      <img src="./assets/image/logo/logo.png" class="nav-image" alt="">
      <div class="nav-title">三国趣谈</div>
      <div class="nav-deps">从三国中寻求出为人处事之道!</div>
      <div id="nav" v-for="(item, index) in routeList" :key="index" class="nav-item">
        <router-link :to="item.path">{{item.name}}</router-link>
      </div>
    </div>
    <div style="width: 1080px;margin: 0 auto">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        routeList: [
          {
            path: '/',
            name: '首页'
          },
          {
            path: '/hero',
            name: '论英雄'
          },
          {
            path: '/think',
            name: '锦囊'
          },
          {
            path: '/trickery',
            name: '权谋'
          },
          {
            path: '/book',
            name: '《三国演义》'
          },
          {
            path: '/about',
            name: '关于'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .nav-box {
    width: 1080px;
    margin: 0 auto;
    height: 50px;
    padding: 5px 0;
    display: flex;
    line-height: 40px;
    font-size: 16px;
  }

  .nav-image {
    flex-grow: 0;
    flex-shrink: 0;
    height: 40px;
    width: 40px;
    margin-right: 10px;
  }

  .nav-title {
    flex-grow: 0;
    flex-shrink: 0;
    font-size: larger;
    font-weight: bold;
    margin-right: 10px;
  }

  .nav-deps {
    flex-grow: 1;
    flex-shrink: 0;
    font-size: smaller;
    color: #808695;
  }

  .nav-item {
    padding: 0 5px;
    flex-grow: 0;
    flex-shrink: 0;
  }

  #nav a {
    color: #808695;
    text-align: center;
  }

  #nav a.router-link-exact-active {
    color: #d91419;
  }
</style>
