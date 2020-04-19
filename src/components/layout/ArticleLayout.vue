<template>
  <div>
    <breadcrumb-route></breadcrumb-route>
    <Row :gutter="32">
      <i-col span="18">
        <slot></slot>
      </i-col>
      <i-col span="6">
        <!--<Affix :offset-top="92">-->
        <div>
          <template v-if="def">
            <ranking-layout :rankingList="rankingList"></ranking-layout>
          </template>
          <template v-else>
            <slot name="right-top"></slot>
          </template>
        </div>
        <div>
          <template v-if="def">
            <recommend-layout :recommendList="recommendList"></recommend-layout>
          </template>
          <template v-else>
            <slot name="right-bottom"></slot>
          </template>
        </div>
        <!--</Affix>-->
      </i-col>
    </Row>
  </div>
</template>

<script>
  import BreadcrumbRoute from "@/components/BreadcrumbRoute"
  import RankingLayout from "@/components/layout/RankingLayout"
  import RecommendLayout from "@/components/layout/RecommendLayout"

  export default {
    name: "ArticleLayout",
    props: {
      def: {
        type: Boolean,
        default: false
      }
    },
    components: {
      BreadcrumbRoute,
      RankingLayout,
      RecommendLayout
    },
    data() {
      return {
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

</style>