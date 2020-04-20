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
    name: "InterestingArticle6",
    components: {
      ArticleLayout
    },
    data() {
      return {
        title: '假如七星续命灯不灭北伐成功，诸葛亮会称帝吗？',
        time: '2020-04-01',
        heat: '1.2k',
        linkSrc: 'http://www.e3ol.com/culture/html/2018-12/26225/26225_20181229.shtml',
        article: [
          {
            type: 'text',
            content: '首先，先给予一个绝对的回答：诸葛亮不可能称帝。我们来看一下假' +
              '设题，先不说诸葛亮后期的北伐有很大一个原因在于平衡蜀汉内部势力与缓解' +
              '内部矛盾之外，假设北伐真的成功将西凉与关中地区划入蜀汉领土，那诸葛亮' +
              '也没有自立的根本。'
          },
          {
            type: 'image',
            content: 'http://www.e3ol.com/culture/upfiles/2018/2018122922483186847.jpeg'
          },
          {
            type: 'text',
            content: '至于理由，小编这里一点点回复：'
          },
          {
            type: 'text',
            content: '个人意愿'
          },
          {
            type: 'text',
            content: '诸葛亮无论在演义还是志中的描述都是一个非常标准的士族知识分子。' +
              '作为受到良好教育的士家子弟，他们非常乐意成为帝王身边的辅佐者。这一点' +
              '其实我们可以从三国时期的知名群雄中看到，几乎割据的不是驻外的将军，就' +
              '是具有匪气的各地太守，再或是皇族的各个亲戚。像诸葛亮，荀彧这类士族子' +
              '弟更多愿意成为正统帝王身边的辅佐者，而不愿成为那位帝王。'
          },
          {
            type: 'text',
            content: '北伐成功之后，诸葛亮会称帝吗？'
          },
          {
            type: 'text',
            content: '-'
          },
          {
            type: 'text',
            content: '朝政环境'
          },
          {
            type: 'text',
            content: '当时蜀汉的朝政环境也不允许诸葛亮选择称帝。虽然诸葛亮是荆州' +
              '集团的领头人，但在蜀汉政坛上还有东州集团和益州集团的牵制。而伴随着' +
              '荆州的失守，荆州集团在蜀汉的中后期渐渐衰落，诸葛亮在蜀汉政坛上虽然' +
              '非常受尊重，但同时也是被其他两大集团所监督的。一旦诸葛亮选择对蜀汉' +
              '朝政不利，其他两大集团势必将发动反击从而使蜀汉从内部发生分裂和内乱' +
              '。根据益州集团比较安于现状的特征，恐怕早早就联系曹魏来平乱了。'
          },
          {
            type: 'text',
            content: '-'
          },
          {
            type: 'text',
            content: '社会品评'
          },
          {
            type: 'text',
            content: '曹操可以挟天子以令诸侯，但他不敢代汉称帝。曹丕想尽办法也要' +
              '让汉献帝来禅让，也不能强行自立。而蜀汉一直以汉朝正统自居，刘备好歹是' +
              '皇叔，刘禅再怎么说也是皇亲。一旦北伐成功，刘禅和汉献帝刘协关系可能还' +
              '比较难处理（究竟是刘禅称帝还是刘协归位），但诸葛亮的救国重臣之位是一' +
              '定的。换言之，他会成为第二个曹操。如果称帝，那不就和刘备当时痛恨的窃' +
              '国者曹丕一样了么……'
          },
          {
            type: 'text',
            content: '所以，各位想让诸葛亮称帝的亲们……还是不要让诸葛亮成为窃国大' +
              '盗吧，成为肱股之臣才是他真正想做的。'
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