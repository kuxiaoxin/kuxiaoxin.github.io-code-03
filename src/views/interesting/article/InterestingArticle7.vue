<template>
  <article-layout def :title="title" :time="time" :heat="heat">
    <div>
      <div style="color: #808695;font-size: smaller;padding: 10px 0">
        原文地址：
        <a :href="linkSrc" target="_blank">{{linkSrc}}</a>
      </div>
      <div v-for="(item, index) in article" :key="index">
        <template v-if="item.type==='text'">
          <div class="p-div">{{item.content}}</div>
        </template>
        <template v-else-if="item.type==='image'">
          <div style="margin: 10px;text-align: center">
            <img style="max-width: 100%" :src="item.content" alt="">
          </div>
        </template>
      </div>
    </div>
  </article-layout>
</template>

<script>
  import ArticleLayout from "@/components/layout/ArticleLayout"

  export default {
    name: "InterestingArticle7",
    components: {
      ArticleLayout
    },
    data() {
      return {
        title: '历数三国时期的少数民族',
        time: '2020-04-01',
        heat: '1.2k',
        linkSrc: 'http://www.lishichunqiu.com/zt/sgssmz/',
        article: [
          {
            type: 'text',
            content: '三国乱世，天下纷争!汉失其鹿，英雄竞折!连化外蛮夷，' +
              '也想分一杯羹。成为乱世中另类的风景。自高主刘邦立汉，异族' +
              '侵略一直是朝廷是心腹大患。东汉末年，虽有黄巾作乱，而当权者' +
              '恐怕更担心蛮族入寇中原。丁原、董卓、马腾、公孙赞无不因为对' +
              '异族作战获胜而扬名立万。'
          },
          {
            type: 'text',
            content: '三国时期主要的异族势力有匈奴、乌桓、羌、氐、山越' +
              '和南蛮。这些特殊的势力加入乱世的角逐，对三国格局起了微妙' +
              '的影响作用。一个蛮族的实力要从其经济、政治基础、科技和武' +
              '装上来衡量，都还不可能马上入主中原。'
          },
          {
            type: 'text',
            content: '-'
          },
          {
            type: 'text',
            content: '一、羌族'
          },
          {
            type: 'image',
            content: 'http://www.lishichunqiu.com/zt/sgssmz/wuhuan.jpg'
          },
          {
            type: 'text',
            content: '东汉时，羌人与汉人杂居者更多。东汉初期，羌人与汉' +
              '朝的摩擦与战争尚不严重，至和帝即位前后，羌人与汉朝的战争' +
              '开始频繁起来。'
          },
          {
            type: 'text',
            content: '作为羌人根据地的黄河上游、洮水及湟水地带，古时森林' +
              '繁茂，禽兽众多，气候虽干寒少雨，但土质肥沃，农牧兼宜。从考' +
              '古发掘所提供的新石器时代文化遗址分布状况来看，河湟的远古文' +
              '化亦仅次于黄河中下游，而不下于其他地区。所以古羌人在内地占' +
              '不住脚后，便转移到三河地区居住和繁衍子孙。'
          },
          {
            type: 'text',
            content: '-'
          },
          {
            type: 'text',
            content: '二、山越'
          },
          {
            type: 'image',
            content: 'http://www.lishichunqiu.com/zt/sgssmz/qiang.jpg'
          },
          {
            type: 'text',
            content: '山民的生活方式与务农为生的汉民并无二致。正因为这样，' +
              '所以史书上经常不称越民而只称山民。山民与汉民的区别，主要在' +
              '于山民不给孙吴统治者当兵纳粮。由于山民已基本丧失民族凝聚力' +
              '，所以便不足威胁到孙吴政权的生存，往往被具有军事知识的将领' +
              '所征服。'
          },
          {
            type: 'text',
            content: '实际，质朴的山民并不能代表他们自己的利益，他们只' +
              '能受大小头目的摆布。封建史书所述吴政权与所谓“山越”的矛盾' +
              '，主要还是吴政权和山越上层分子争夺人力物力的矛盾。'
          },
          {
            type: 'text',
            content: '-'
          },
          {
            type: 'text',
            content: '三、叟族'
          },
          {
            type: 'image',
            content: 'http://www.lishichunqiu.com/d/file/sanguo/sglishi/388abbc72ccba2af29f07e04e5e7dd8c.jpg'
          },
          {
            type: 'text',
            content: '叟族系西羌一个支族，先秦时活动于今甘肃、青海及其' +
              '邻近省区。《尚书》卷2《禹贡》、《史记》卷2《夏本纪》及《汉' +
              '书》卷6《武帝纪》提及作为西戎之一的“渠搜”，即叟族的前身。' +
              '《旧唐书》卷91《张柬之传》言：“诸葛亮五月渡庐……使张伯岐选' +
              '其劲卒搜兵”，搜兵即叟兵。《华阳国志》卷4《南中志》言诸葛亮' +
              '“移南中劲卒青羌万余家于蜀”，青羌即叟之在南中者。春秋战国时' +
              '，叟人建立蜀国。公元前316年，秦惠王遣司马错灭蜀。汉代史家' +
              '常称蜀为叟，蜀、叟二字同声通义。周武王伐纣，包括蜀在内的八' +
              '个小国亦曾参加。蜀郡叟人因与汉人相处日久，逐渐融合。四川东' +
              '部的巴人亦是一样。可是在蜀郡激外的西南夷仍有不少经济文化比' +
              '较落后的叟人部落。大体说来，叟族是由西北在西南移动的。'
          },
          {
            type: 'text',
            content: '-'
          },
          {
            type: 'text',
            content: '四、肃慎'
          },
          {
            type: 'image',
            content: 'http://www.e3ol.com/topics/upfiles/2014/201421114464735604.jpg'
          },
          {
            type: 'text',
            content: '肃慎，又称息慎、稷慎。早在舜禹时期就已存在并同' +
              '中原有密切的来往。'
          },
          {
            type: 'text',
            content: '而据《山海经·大荒北经》以及《扩地志》记载表明' +
              '，肃慎人主要分布在长白山以北的牡丹江流域，东滨海以及黑' +
              '龙江流域的广大地区。'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .p-div {
    text-indent: 36px;
    line-height: 36px;
  }
</style>