<template>
  <div class="home">
    <div class="top-image-box">
      <img class="top-image" src="../../assets/image/home/nav-background.jpg" alt="首页图片">
      <div class="top-image-mask"></div>
      <div class="poetry-box wow slideInUp" data-wow-duration="1s">
        <h2>《临江仙》</h2>
        <i class="poetry-box-i"></i>
        <h3>滚滚长江东逝水，浪花淘尽英雄。是非成败转头空。</h3>
        <h3>青山依旧在，几度夕阳红。</h3>
        <h3>白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢。</h3>
        <h3>古今多少事，都付笑谈中。</h3>
      </div>
    </div>
    <title-bar title="最近文章">
      <img style="height: 48px;margin: -10px 0;" src="../../assets/image/titleBar/text/recentArticles.png" alt="文字图片">
    </title-bar>
    <Row style="margin-top: 16px" :gutter="48" type="flex" justify="center" align="middle">
      <i-col v-for="(item, index) in articleList" :key="index" span="8">
        <special-card style="margin-bottom: 48px"
                      type="趣谈"
                      :title="item.title"
                      :time="item.time"
                      :routerName="item.routerName"
                      :image="item.image"
                      :describe="item.describe"
                      ></special-card>
      </i-col>
    </Row>
  </div>
</template>

<script>
  import SpecialCard from "@/components/SpecialCard"
  import TitleBar from "@/components/TitleBar"
  import { WOW } from "wowjs"

  export default {
    name: 'Home',
    components: {
      SpecialCard,
      TitleBar
    },
    data() {
      return {
        articleList: [
          {
            title: '历数三国时期的少数民族',
            image: 'http://www.lishichunqiu.com/zt/sgssmz/sgssmz.jpg',
            time: '2020-04-01',
            heat: '1.2k',
            describe: '三国乱世，天下纷争!汉失其鹿，英雄竞折!连化外蛮夷，也想分一杯' +
              '羹。成为乱世中另类的风景。自高主刘邦立汉，异族侵略一直是朝廷是心腹大患' +
              '。东汉末年，虽有黄巾作乱，而当权者恐怕更担心蛮族入寇中原。丁原、董卓、' +
              '马腾、公孙赞无不因为对异族作战获胜而扬名立万。',
            routerName: 'InterestingArticle7'
          },
          {
            title: '刘禅追谥尚欠赵云一个正点',
            image: 'http://www.e3ol.com/biography/pic/id/240/19.jpg',
            time: '2020-04-01',
            heat: '1.2k',
            describe: '君主时代帝王死后，会依据他生前的所作所为给他一个定性类的称号，' +
              '对于一些重要的大臣来说，也会得到这样的待遇，称之为谥号。这是一种盖棺论' +
              '定，尤其对于大臣，能获得谥号表明位高权重或者是功劳大，所以，这是一种身' +
              '后的荣耀。蜀汉国实际建国时间相对较晚还短，获得谥号的大臣只有六人，后来' +
              '刘禅又追谥了几人，前后总共不过十几个人。赵云就是这几个被追谥的大臣之一。',
            routerName: 'InterestingArticle1'
          },
          {
            title: '小隐隐于野，中隐隐于市，大隐隐于朝 魏晋时期的隐逸之风',
            image: 'http://www.e3ol.com/biography/pic/id/240/34.jpg',
            time: '2020-04-01',
            heat: '1.2k',
            describe: '中国古代的知识分子大约可以划分为两类，一是吃皇粮的，也就是“仕”' +
              '，二是住山林的，称为“隐”。隐文化不是中国文化的主流，主流文化对隐士持有反' +
              '对态度，因此，“隐”只是表面，骨子里还是入世的。古人将“隐”分了层级：“小隐' +
              '隐于野，中隐隐于市，大隐隐于朝。”把“隐”的最高境界定位于隐身朝廷之中，由此' +
              '也能看出隐文化的入世态度。',
            routerName: 'InterestingArticle2'
          },
          {
            title: '三国真正的铁甲雄兵之一：西凉铁骑究竟有多少人？',
            image: 'http://www.e3ol.com/culture/upfiles/2018/201812292371518916.jpeg',
            time: '2020-04-01',
            heat: '1.2k',
            describe: '三国混乱战局中，出现过两支精锐骑兵，前面我们介绍过曹氏将领' +
              '率领的虎豹骑，今天来聊一聊西凉铁骑。',
            routerName: 'InterestingArticle3'
          },
          {
            title: '从威震华夏到败走麦城只需6个月，关羽失荆州不只是因为大意',
            image: 'http://www.e3ol.com/biography/pic/id/240/48.jpg',
            time: '2020-04-01',
            heat: '1.2k',
            describe: '东汉末年分三国 烽火连天不休，JJ的歌词中刻画了一个群雄逐鹿的时' +
              '代，这个时代里有波云诡谲的权谋游戏，有风林火山的战争法则。每一幕的历史大' +
              '剧都有不同的主演，有些是智计百出的帝王之师，有些则是杀伐决断的千古名将。',
            routerName: 'InterestingArticle4'
          },
          {
            title: '假如七星续命灯不灭北伐成功，诸葛亮会称帝吗？',
            image: 'http://www.e3ol.com/biography/pic/id/240/284.jpg',
            time: '2020-04-01',
            heat: '1.2k',
            describe: '假如七星续命灯不灭北伐成功，诸葛亮会称帝吗？',
            routerName: 'InterestingArticle6'
          }
        ]
      }
    },
    mounted() {
      let wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true
      })
      wow.init();
    }
  }
</script>

<style scoped>
  .top-image-box {
    position: relative;
    overflow: hidden;
  }

  .top-image {
    width: 100%;
    height: auto;
    margin-bottom: -5px;
  }

  .top-image-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0.9;
  }

  .poetry-box {
    position: absolute;
    color: #fff;
    bottom: 0;
    left: 50%;
    margin-left: -300px;
    width: 600px;
    text-align: center;
    margin-bottom: 240px;
  }

  .poetry-box-i {
    height: 3px;
    width: 240px;
    background: white;
    display: inline-block;
    margin-bottom: 3px;
  }
</style>
