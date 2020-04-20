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
    name: "InterestingArticle5",
    components: {
      ArticleLayout
    },
    data() {
      return {
        title: '关羽在西游世界：堂堂伏魔大帝，为何在天庭看大门？',
        time: '2020-04-01',
        heat: '1.2k',
        linkSrc: 'http://www.e3ol.com/culture/html/2018-12/26226/26226_20181229.shtml',
        article: [
          {
            type: 'text',
            content: '在《西游记》中，关羽有登场。'
          },
          {
            type: 'text',
            content: '原著第16回写到观音禅院故事时道：好行者，一筋斗跳上南天门里，唬得' +
              '个庞刘苟毕躬身，马赵温关控背，俱道：“不好了，不好了！那闹天宫的主子又来了！”'
          },
          {
            type: 'text',
            content: '原著第58回写到真假美猴王故事时又道：二人扯扯拉拉，口里不住的嚷斗' +
              '，径至南天门外，慌得那广目天王率马赵温关四大天将，及把门大小众神，各使兵器' +
              '挡住。'
          },
          {
            type: 'text',
            content: '两处原文中的马赵温关中的关，就是关羽。'
          },
          {
            type: 'text',
            content: '在明清时期，关羽不是被封为伏魔大帝、关圣帝君吗？为何在明朝著名神魔' +
              '小说中，关羽只是在南天门中看大门的？'
          },
          {
            type: 'text',
            content: '要想弄清楚这个问题，我们先来确认下关羽在仙神界的身份。'
          },
          {
            type: 'text',
            content: '这马赵温关中的关，究竟是不是关羽？'
          },
          {
            type: 'image',
            content: 'http://www.e3ol.com/culture/upfiles/2018/2018122922551679858.jpg'
          },
          {
            type: 'text',
            content: '首先，在古代著名的神仙谱系大作《三教源流搜神大全》中有马赵温关四位' +
              '神将的生平简介以及画像。画像中的关元帅正是手握青龙偃月刀的红脸长髯汉子。百' +
              '分百就是关羽形象。'
          },
          {
            type: 'text',
            content: '另外，与《西游记》同为明朝神魔小说的《三宝太监下西洋全传》中，详细写' +
              '到了四大元帅出场情况，我简单抄录在下：'
          },
          {
            type: 'text',
            content: '-'
          },
          {
            type: 'text',
            content: '第一位生得白白的，白如雪：'
          },
          {
            type: 'text',
            content: '一称元帅二华光，眉生三眼照天堂。'
          },
          {
            type: 'text',
            content: '头戴叉叉攒顶帽，五金砖在袖儿藏。'
          },
          {
            type: 'text',
            content: '火车脚下团团转，马元帅速赴坛场。'
          },
          {
            type: 'text',
            content: '-'
          },
          {
            type: 'text',
            content: '第二位生得黑黑的，黑如铁：'
          },
          {
            type: 'text',
            content: '铁作幞头连雾长，乌油袍袖峭寒生。'
          },
          {
            type: 'text',
            content: '濆花玉带腰间满，竹节钢鞭手内擎。'
          },
          {
            type: 'text',
            content: '坐下斑斓一猛虎，四个鬼左右相跟。'
          },
          {
            type: 'text',
            content: '-'
          },
          {
            type: 'text',
            content: '第三位生得青青的，青如靛：'
          },
          {
            type: 'text',
            content: '蓝靛包巾光满目，翡翠佛袍花一簇。'
          },
          {
            type: 'text',
            content: '朱砂发梁遍通红，青脸獠牙形太毒。'
          },
          {
            type: 'text',
            content: '祥云霭霭离天宫，狠狠牙妖精尽伏。'
          },
          {
            type: 'text',
            content: '-'
          },
          {
            type: 'text',
            content: '第四位生得赤赤的，赤如血：'
          },
          {
            type: 'text',
            content: '凤翅绿巾星火裂，三绺髭须脑后撇。'
          },
          {
            type: 'text',
            content: '卧蚕一皱肝胆寒，凤眼圆睁神鬼怯。'
          },
          {
            type: 'text',
            content: '青龙刀摆半天昏，跨赤兔坛前漫谒。'
          },
          {
            type: 'text',
            content: '-'
          },
          {
            type: 'text',
            content: '很明显，这四大元帅就是马赵温关，第四位关元帅就是关羽无疑。'
          },
          {
            type: 'text',
            content: '这四大元帅在《西游记》中具体是什么职务呢？'
          },
          {
            type: 'text',
            content: '他们是负责看管南天门的神将。'
          },
          {
            type: 'text',
            content: '在南天门守卫诸将中，地位最低的自然是天兵，天兵之上' +
              '是天将。天将之中，有庞、刘、苟、毕、邓、辛、张、陶、殷、朱' +
              '、陶、许等许多天君，他们都是雷部三十六正神之一，也都是四大' +
              '天门中的守卫神将。'
          },
          {
            type: 'text',
            content: '关羽的地位与上面这些神将相比，差不多，顶多是略高一些。'
          },
          {
            type: 'image',
            content: 'http://www.e3ol.com/culture/upfiles/2018/2018122922552964230.jpg'
          },
          {
            type: 'text',
            content: '当孙悟空到达南天门的时候，每次第一个出来迎接的，都是四大天王中的广目天王' +
              '。他是看守南天门的主将。'
          },
          {
            type: 'text',
            content: '紧跟着行礼的，是马赵温关四大元帅，然后再是其他大小门神。'
          },
          {
            type: 'text',
            content: '也就是说，关羽在西游记中，只是看守南天门的二流神将，顶多相当于古代锦衣卫' +
              '统领或者大内侍卫领班。'
          },
          {
            type: 'text',
            content: '在四大天王之上，则是卷帘大将沙和尚。'
          },
          {
            type: 'text',
            content: '《西游记》中沙和尚曾亲口说：“南天门里我为尊，凌霄殿前吾称上。”作为玉帝' +
              '身边的禁军大将，他统领南天门诸神将，也合情合理。'
          },
          {
            type: 'text',
            content: '那么，为何堂堂关圣帝君、伏魔大帝在《西游记》中地位这么低？'
          },
          {
            type: 'text',
            content: '我想，有三个重要原因。'
          },
          {
            type: 'text',
            content: '首先，仙界能人辈出，与他并列的神将个个都厉害。'
          },
          {
            type: 'image',
            content: 'http://www.e3ol.com/culture/upfiles/2018/2018122922553871913.jpg'
          },
          {
            type: 'text',
            content: '四大元帅头一位马元帅，又叫马天君、华光天王、华光大帝。民间常说的“马王' +
              '爷三只眼”，说得就是这位马元帅。因为马元帅名气太大，就连佛教也不得不把他拉拢过' +
              '去，封他做了华光菩萨。'
          },
          {
            type: 'text',
            content: '这马元帅的人事关系比较复杂。他一方面是佑圣真君麾下、五百灵官之首，在那儿，他' +
              '的名字叫做王灵官。通明殿前，他曾和孙悟空大战，短时期不分胜败，是一位真正的狠角色。'
          },
          {
            type: 'text',
            content: '另一方面，马元帅又是九天应元雷声普化天尊麾下三十六位雷部正神第一人。'
          },
          {
            type: 'text',
            content: '所谓能者多劳，像马元帅这种人才，多几个职务也很正常。'
          },
          {
            type: 'text',
            content: '四大元帅中的赵元帅，看过《封神》的都应该知道，就是赫赫有名的大罗' +
              '金仙赵公明。赵公明死后被封为金龙如意龙虎正一玄坛真君。'
          },
          {
            type: 'text',
            content: '其实，在道教体系中，赵公明的身份很高，他曾经辅佐第一代张天师创立' +
              '天师道，并且平定蜀地，有大功勋，因此才被封为玄坛真君。'
          },
          {
            type: 'text',
            content: '至于温元帅，名为温琼，为东岳大帝麾下头号神将，封号很长，大约为“' +
              '统兵天下玉皇殿前左元金翊灵照武雷王佑候温元帅”。总之，人家也是天王级别的神将。'
          },
          {
            type: 'text',
            content: '原来，与关羽并称仙界四大元帅的马赵温关，人家每一个不是天王，就是' +
              '大帝，级别一点不比关羽差，资历更是甩关羽一条街。'
          },
          {
            type: 'text',
            content: '与马赵温三人并列，关羽不冤。'
          },
          {
            type: 'text',
            content: '其次、关羽缺少仙界大靠山。'
          },
          {
            type: 'text',
            content: '我们看四大元帅其他三人，马元帅是佑圣真君（即真武大帝）的人，赵' +
              '公明是四大天师中张天师的人，温琼是掌管人间祸福的东岳大帝的人，唯独关羽，' +
              '在人间粉丝多，但是在仙界没有大靠山。'
          },
          {
            type: 'text',
            content: '这就像是某人在农村混的很好，乡长村长都夸张，老百姓人人都羡慕，' +
              '结果一到大城市昔日的人脉全都用不上了，自然只能在底层打拼了。'
          },
          {
            type: 'text',
            content: '第三、也是最为重要的，是西游描绘的仙神世界太高端。'
          },
          {
            type: 'text',
            content: '在不少神话故事中，什么山神、水神、花妖、狐仙都神通广大，像济' +
              '公一个罗汉就可以横扫人间群魔，在聊斋故事中，随便派一个天兵下来，那就' +
              '无敌了。这是因为那些仙神都太低级。'
          },
          {
            type: 'text',
            content: '在西游世界中，帝君、天王、大帝什么的比比皆是。南天门看大门的' +
              '神将，那几乎人人都是天王，个个都是帝君。见到孙悟空都要打躬作揖。'
          },
          {
            type: 'text',
            content: '所谓人外有人天外有天。毕竟西游世界有三十三重天，历经无数亿年' +
              '，关羽的修为和资历都太短了些。'
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