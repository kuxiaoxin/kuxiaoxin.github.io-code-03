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
    name: "InterestingArticle3",
    components: {
      ArticleLayout
    },
    data() {
      return {
        title: '三国真正的铁甲雄兵之一：西凉铁骑究竟有多少人？',
        time: '2020-04-01',
        heat: '1.2k',
        linkSrc: 'http://www.e3ol.com/culture/html/2018-12/26228/26228_20181229.shtml',
        article: [
          {
            type: 'text',
            content: '三国混乱战局中，出现过两支精锐骑兵，前面我们介绍过曹氏将领' +
              '率领的虎豹骑，今天来聊一聊西凉铁骑。'
          },
          {
            type: 'text',
            content: '西凉铁骑又称西凉兵团有两支，一支是凉州军阀董卓的部队（凉州' +
              '政府军出身岷县），董卓死后由部将李傕率领。另一支是马腾、韩遂的部队' +
              '（凉州起义军），后马超继任西凉军首领。凉州地处汉、羌边界，民风剽悍' +
              '，悍不畏死。自古陇右精骑便横行天下，史称“凉州大马，横行天下”。秦始' +
              '皇得之，便扫平六国，唐太宗得之，便虎视天下。马超凭借西凉铁骑的威猛' +
              '，与曹操六战渭水，杀的曹操割须弃袍，狼狈逃窜，可见西凉铁骑战斗力之' +
              '强悍。刘备真正有实力入川自立地盘的决定因素就是得了西凉马超和西凉军团。'
          },
          {
            type: 'image',
            content: 'http://www.e3ol.com/culture/upfiles/2018/201812292371518916.jpeg'
          },
          {
            type: 'text',
            content: '西凉铁骑的作战是古罗马军团和东汉初期的凉州铁骑的完美融合，' +
              '兼具了两者的优秀特质，作战彪悍、凶狠、尤其适合沙漠戈壁的长距离持久' +
              '奔袭作战，这也与凉州人的特质和大宛马的特质有关，古说“凉州大马，横' +
              '行天下”，从凉州东汉雷台汉墓出土的凉州铁骑方阵看，确实如此。'
          },
          {
            type: 'text',
            content: '西凉铁骑是蜀国最具有攻击力的骑兵部队，东汉蜀国的三大精锐' +
              '之一。这支军队是蜀国五虎上将之马超率领下的重甲骑兵，乃是蜀国骁勇' +
              '骑兵军团，令敌人闻风丧胆。周身精钢铁甲的西凉铁骑，攻击力不俗，防' +
              '御力更是强悍之极。'
          },
          {
            type: 'text',
            content: '三国朝局混乱，一切均混乱不堪。以称呼为例，那除了董卓马' +
              '超的部队，还有哪些可以称为西凉铁骑，数量又有多少呢?'
          },
          {
            type: 'text',
            content: '之前，董卓进京，带甲二十万，雄赳赳，气昂昂，纵横于洛阳' +
              '的大街小巷，从而一举控制朝局。那时，大家称其为西凉兵。董卓一死' +
              '，李郭张樊四将逃至陕西，用贾诩之谋，煽动西凉民众，一同造反，竟' +
              '达十余万人。那时，大家也称其为西凉兵。不久，马腾和韩遂又率十几' +
              '万人杀来。现在，大家还称其为西凉兵。如此，就把笔者给彻底搞懵了' +
              '。这天底下的西凉兵究竟有几何?!从董到李，再到马，前后三者相加，' +
              '西凉兵当在四五十万间。'
          },
          {
            type: 'image',
            content: 'http://www.e3ol.com/culture/upfiles/2018/201812292372650087.jpeg'
          },
          {
            type: 'text',
            content: '笔者虽不知西凉州户籍为几许，但对各方之军事实力还略知一二' +
              '。天下各镇，少的三两万，多则也就十来万而已。西凉地广人稀，短时间' +
              '竟涌现出如此多精壮，着实让人诧异不已。'
          },
          {
            type: 'text',
            content: '董卓的西凉兵总计三万八千人，其中铁骑八千。进京时，因前途未' +
              '卜，为保存实力，给自己留条退路，他实际上只带了三千铁骑。进入洛阳后' +
              '，为迷惑政敌，震慑群臣，每隔四五天，他便命所部兵马趁夜出城。翌日，' +
              '再浩浩荡荡开进城来。进城时，还故意耀武扬威——战鼓震天，旌旗招展，声' +
              '势浩大，好让人误以为那西凉兵源源不断，俨然有千军万马。'
          },
          {
            type: 'text',
            content: '董卓死，李傕等四将带三千飞熊军逃走。这三千飞熊军就是当初董' +
              '卓进京时的三千西凉铁骑。后来，李傕等虽号称有十余万西凉兵，但实际上' +
              '真正的西凉兵还不足一万两千人。其人马大多是在进攻长安路上沿途招募的' +
              '，以无家可归的流民居多。至于马腾和韩遂，他们尽管经略西凉已久，可其' +
              '兵士中胡人和汉人亦不在少数，真正的西凉兵约在四万五千人左右。'
          },
          {
            type: 'image',
            content: 'http://www.e3ol.com/culture/upfiles/2018/201812292373641158.jpeg'
          },
          {
            type: 'text',
            content: '如此三者相加，西凉兵人数为九万五。因三千飞熊军与三千铁骑为' +
              '同一支队伍，故西凉兵实际数目应为九万三千人。'
          },
          {
            type: 'text',
            content: '之前，西凉太守马腾曾对外发表声明，称只有他和韩遂的军队才' +
              '是真正的西凉兵。如照此计算，那真正的西凉兵就只有四万五千人了，相' +
              '当于外界盛传数目的十分之一。'
          },
          {
            type: 'text',
            content: '由此可见，人言可畏。所谓，口口相传，众口铄金，三人成虎。' +
              '一不留神，便等同于百万雄兵。'
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