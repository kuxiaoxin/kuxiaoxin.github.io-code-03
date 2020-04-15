<template>
  <div id="app">
    <div class="nav">
      <div class="nav-box">
        <img src="./assets/image/logo/logo.png" class="nav-image" alt="">
        <div class="nav-title">三国趣谈</div>
        <div class="nav-deps">从三国中寻求出为人处事之道!</div>
        <div id="nav" v-for="(item, index) in routeList" :key="index" class="nav-item">
          <template v-if="item.target==='_self'">
            <router-link :to="item.path" :target="item.target">{{item.name}}</router-link>
          </template>
          <template v-else-if="item.target==='_blank'">
            <a :href="item.path" :target="item.target">{{item.name}}</a>
          </template>
        </div>
      </div>
    </div>
    <div style="width: 1080px;margin: 0 auto">
      <router-view/>
    </div>
    <BackTop></BackTop>
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
            name: '首页',
            target: '_self'
          },
          {
            path: '/hero',
            name: '论英雄',
            target: '_self'
          },
          {
            path: '/think',
            name: '锦囊',
            target: '_self'
          },
          {
            path: '/trickery',
            name: '权谋',
            target: '_self'
          },
          {
            // path: '/book',
            path: 'http://www.purepen.com/sgyy/',
            name: '《三国演义》',
            target: '_blank'
          },
          {
            path: '/about',
            name: '关于',
            target: '_self'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .nav {
    border-bottom: 1px solid rgba(30, 35, 42, .06);
    transition: background .6s ease-in-out, padding .6s ease-in-out;
    box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);
    margin-bottom: 2px;
  }

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
