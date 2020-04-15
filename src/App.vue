<template>
  <div id="app">
    <div id="nav">
      <template v-for="(item, index) in routeList">
        <router-link :to="item.path" :key="index">{{item.name}}</router-link>
      </template>
    </div>
    <router-view/>
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

<style>

  #nav a {
    color: #ccc;
    text-align: center;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
