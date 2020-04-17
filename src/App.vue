<template>
  <div id="app">
    <div class="nav">
      <div class="nav-box">
        <a style="color: #333;display: block;" href="/">
          <img src="./assets/image/logo/logo.png" class="nav-image" alt="">
        </a>
        <a style="color: #333;display: block;" href="/">
          <div class="nav-title">三国趣谈</div>
        </a>
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
    <div style="width: 1200px;margin: 52px auto 0">
      <router-view/>
    </div>
    <BackTop></BackTop>
    <div style="background: #333;margin-top: 64px;">
      <div class="bottom-background"></div>
      <div class="bottom-box">
        <Row :gutter="32">
          <i-col span="6">
            <h2 style="margin-bottom: 16px;">友情链接</h2>
            <a class="bottom-col-item" href="https://www.ageeye.cn/" target="_blank">发现中国</a>
            <a class="bottom-col-item" href="http://www.ltfc.net/" target="_blank">中华珍宝馆</a>
            <a class="bottom-col-item" href="https://www.allhistory.com/" target="_blank">全历史</a>
            <a class="bottom-col-item" href="http://www.lsdag.com" target="_blank">中国第一历史档案馆</a>
            <a class="bottom-col-item" href="http://www.jianglishi.cn/" target="_blank">中国历史</a>
            <a class="bottom-col-item" href="http://www.wenbao.net/" target="_blank">中国历史文化遗产保护网</a>
            <a class="bottom-col-item" href="http://www.hxlsw.com/" target="_blank">中国古代历史</a>
          </i-col>
          <i-col span="6">
            <a style="margin-top: 47px" class="bottom-col-item" href="http://www.lishichunqiu.com/" target="_blank">历史春秋网</a>
            <a class="bottom-col-item" href="http://www.lishiweb.com/" target="_blank">论剑历史</a>
            <a class="bottom-col-item" href="http://www.qulishi.com/" target="_blank">趣历史</a>
            <a class="bottom-col-item" href="http://www.mh.sinica.edu.tw/index.aspx" target="_blank">中央研究院近代史研究所</a>
            <a class="bottom-col-item" href="http://www.guoxue123.com/index.htm" target="_blank">国学导航</a>
            <a class="bottom-col-item" href="https://www.digroc.com/CNH/index.aspx" target="_blank">民国近代史</a>
          </i-col>
          <i-col span="12">
            <h2 style="margin-bottom: 16px;">网站声明</h2>
            <p>本站作品均由作者自主制作和分享，仅用于交流学习目的，如果您发现网站上有侵犯您的知识产权的作品，请与我们取得联系，我们会及时删除。</p>
            <div style="margin-top: 48px;display: flex;">
              <div style="flex-grow: 1;flex-shrink: 0;margin-right: 16px;">
                <h2 style="margin-bottom: 16px;">联系我们</h2>
                <div>
                  <Icon type="md-mail"/>
                  <span style="margin-left: 4px">1302139012@qq.com</span>
                </div>
                <a class="bottom-col-item" href="https://github.com/kuxiaoxin/kuxiaoxin.github.io-code-03"
                   target="_blank">
                  <Icon type="logo-github"/>
                  <span style="margin-left: 4px">Github公开仓库</span>
                </a>
              </div>
              <img style="flex-grow: 0;flex-shrink: 0;margin-right: 16px;" width="100" height="100"
                   src="./assets/image/home/qr-code.png" alt="二维码">
              <img style="flex-grow: 0;flex-shrink: 0;" width="100" height="100"
                   src="./assets/image/home/qr-code.png" alt="二维码">
            </div>
          </i-col>
        </Row>
      </div>
      <div class="bottom-background"></div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  if ($(window).width() < 1200) alert('分辨率大于1200的设备上查看该网站体验更佳。')

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
            path: '/interesting',
            name: '趣谈',
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
  #app {
    position: relative;
  }

  .nav {
    width: 100%;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    border-bottom: 1px solid rgba(30, 35, 42, .06);
    transition: background .6s ease-in-out, padding .6s ease-in-out;
    box-shadow: 0 1px 3px 0 rgba(0, 34, 77, .05);
    background: white;
  }

  .nav-box {
    background: white;
    width: 1200px;
    max-width: 1200px;
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
    margin-right: 4px;
  }

  .nav-title {
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 26px;
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
    color: #ed4014;
  }

  .bottom-box {
    width: 1200px;
    margin: 0 auto;
    color: #fff;
    padding: 48px 0;
    background: #333;
  }

  .bottom-friend-box {
    flex-grow: 1;
    flex-shrink: 0;
  }

  .bottom-contact-box {
    flex-grow: 0;
    flex-shrink: 0;
  }

  .bottom-col-item {
    margin-bottom: 8px;
    color: #fff;
    display: block;
  }

  .bottom-col-item:hover {
    color: #ed4014;
  }

  .bottom-background {
    height: 30px;
    width: 100%;
    background: url("../src/assets/image/home/bottom-item-min-1.svg") repeat-x center;
    background-size: 30px;
    margin: 0 auto;
  }
</style>
