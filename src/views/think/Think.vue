<template>
  <page-layout>
    <div>
      <region-bar title="筛选条件"></region-bar>
      <div class="search-item">
        <div class="search-title">
          <div style="margin-top: 2px;">
            关键字：
          </div>
        </div>
        <div class="search-body">
          <i-input placeholder="输入关键字"></i-input>
        </div>
        <div class="search-title" style="margin-left: 8px;">时间：</div>
        <div>
          <DatePicker type="daterange" placement="bottom-end" placeholder="选择时间"
                      style="width: 200px"></DatePicker>
        </div>
        <i-button style="margin-left: 32px;" type="primary">查询</i-button>
        <i-button style="margin-left: 8px;">重置</i-button>
      </div>
      <div class="search-item">
        <div class="search-title">敌我实力：</div>
        <div class="search-body">
          <Tag style="font-size: 16px;" checkable color="primary">不限</Tag>
          <Tag style="font-size: 16px;" checkable :checked="false" color="primary">敌众我寡</Tag>
          <Tag style="font-size: 16px;" checkable :checked="false" color="primary">敌寡我众</Tag>
          <Tag style="font-size: 16px;" checkable :checked="false" color="primary">其他</Tag>
        </div>
      </div>
    </div>
    <div style="padding-top: 16px;">
      <div v-for="(item, index) in articleList" :key="index">
        <article-card :title="item.title"
                      :image="item.image"
                      :time="item.time"
                      :heat="item.heat"
                      :describe="item.describe"
                      :routerName="item.routerName"></article-card>
        <Divider/>
      </div>
    </div>
    <div style="text-align: center;">
      <Page :total="200" size="small"/>
    </div>
    <div slot="right-top">
      <ranking-layout :rankingList="rankingList"></ranking-layout>
    </div>
    <div slot="right-bottom">
      <recommend-layout :recommendList="recommendList"></recommend-layout>
    </div>
  </page-layout>
</template>

<script>
  import PageLayout from "@/components/layout/PageLayout"
  import RankingLayout from "@/components/layout/RankingLayout"
  import RecommendLayout from "@/components/layout/RecommendLayout"
  import RegionBar from "@/components/RegionBar"
  import ArticleCard from "@/components/ArticleCard"

  export default {
    name: "Think",
    components: {
      PageLayout,
      RankingLayout,
      RecommendLayout,
      RegionBar,
      ArticleCard
    },
    data() {
      return {
        articleList: [
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
            title: '关羽在西游世界：堂堂伏魔大帝，为何在天庭看大门？',
            image: 'http://www.e3ol.com/culture/upfiles/2018/2018122922551679858.jpg',
            time: '2020-04-01',
            heat: '1.2k',
            describe: '在《西游记》中，关羽有登场。原著第16回写到观音禅院故事时道：好行者，一筋斗跳上南天门里，' +
              '唬得个庞刘苟毕躬身，马赵温关控背，俱道：“不好了，不好了！那闹天宫的主' +
              '子又来了！”',
            routerName: 'InterestingArticle5'
          },
          {
            title: '假如七星续命灯不灭北伐成功，诸葛亮会称帝吗？',
            image: 'http://www.e3ol.com/biography/pic/id/240/284.jpg',
            time: '2020-04-01',
            heat: '1.2k',
            describe: '假如七星续命灯不灭北伐成功，诸葛亮会称帝吗？',
            routerName: 'InterestingArticle6'
          },
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
          }
        ],
        recommendList: [
          {
            image: 'http://www.e3ol.com/topics/upfiles/2017/201781910928236.jpg',
            title: '（转载）单骑定荆州：刘表年轻时比刘备还猛'
          },
          {
            image: 'http://www.e3ol.com/topics/upfiles/2017/201781910928236.jpg',
            title: '（转载）单骑定荆州：刘表年轻时比刘备还猛'
          },
          {
            image: 'http://www.e3ol.com/topics/upfiles/2017/201781910928236.jpg',
            title: '（转载）单骑定荆州：刘表年轻时比刘备还猛'
          }
        ],
        rankingList: [
          {
            routerName: '',
            title: '从威震华夏到败走麦城只需6个月，关羽失荆州不只是因为大意'
          },
          {
            routerName: '',
            title: '三国真正的铁甲雄兵之一：西凉铁骑究竟有多少人？'
          },
          {
            routerName: '',
            title: '蜀汉刘备——中年肥肉男佛系创业的不甘与坚持'
          },
          {
            routerName: '',
            title: '蜀汉刘备的巅峰之战——汉中争夺战全面回顾'
          },
          {
            routerName: '',
            title: '刘备三国创业版图，成也关张，败也关张'
          },
          {
            routerName: '',
            title: '鲜为人知的孙吴名将-贺齐的精彩故事'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .search-item {
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    display: flex;
    align-items: flex-start;
  }

  .search-title {
    margin-top: 4px;
    color: #808695;
    flex-grow: 0;
    flex-shrink: 0;
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
  }

  .search-body {
    flex-grow: 1;
    flex-shrink: 0;
    width: 0;
  }

  .recommend-box {
    width: 100%;
    height: 180px;
    overflow: hidden;
    margin-bottom: 8px;
    border-radius: 4px;
  }

  .recommend-box-image {
    width: 100%;

  }

  .recommend-box-text {
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 8px;
  }

  .region-title {
    padding: 8px;
    line-height: 24px;
    font-size: 18px;
  }
</style>