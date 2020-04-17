<template>
  <div>
    <breadcrumb-route></breadcrumb-route>
    <Row :gutter="32">
      <i-col span="18">
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
            <div class="search-title">所属势力：</div>
            <div class="search-body">
              <Tag style="font-size: 16px;" checkable color="primary">不限</Tag>
              <Tag style="font-size: 16px;" checkable :checked="false" color="primary">东汉</Tag>
              <Tag style="font-size: 16px;" checkable :checked="false" color="primary">魏</Tag>
              <Tag style="font-size: 16px;" checkable :checked="false" color="primary">蜀</Tag>
              <Tag style="font-size: 16px;" checkable :checked="false" color="primary">吴</Tag>
              <Tag style="font-size: 16px;" checkable :checked="false" color="primary">袁术</Tag>
              <Tag style="font-size: 16px;" checkable :checked="false" color="primary">袁绍</Tag>
              <Tag style="font-size: 16px;" checkable :checked="false" color="primary">刘表</Tag>
              <Tag style="font-size: 16px;" checkable :checked="false" color="primary">起义军</Tag>
              <Tag style="font-size: 16px;" checkable :checked="false" color="primary">董卓</Tag>
              <Tag style="font-size: 16px;" checkable :checked="false" color="primary">刘璋</Tag>
              <Tag style="font-size: 16px;" checkable :checked="false" color="primary">西晋</Tag>
              <Tag style="font-size: 16px;" checkable :checked="false" color="primary">少数民族</Tag>
              <Tag style="font-size: 16px;" checkable :checked="false" color="primary">在野</Tag>
              <Tag style="font-size: 16px;" checkable :checked="false" color="primary">其他</Tag>
            </div>
          </div>
        </div>
        <div style="padding-top: 16px;">
          <template v-for="i in 10">
            <div :key="i">
              <article-card></article-card>
              <Divider/>
            </div>
          </template>
        </div>
        <div style="text-align: center;">
          <Page :total="200" size="small"/>
        </div>
      </i-col>
      <i-col span="6">
        <!--<Affix :offset-top="92">-->
        <div>
          <region-bar title="排行板"></region-bar>
          <div class="region-title">
            <a href="#" style="color: #515a6e">
              1.从威震华夏到败走麦城只需6个月，关羽失荆州不只是因为大意
            </a>
          </div>
          <div class="region-title">
            <a href="#" style="color: #515a6e">
              2.三国真正的铁甲雄兵之一：西凉铁骑究竟有多少人？
            </a>
          </div>
          <div class="region-title">
            <a href="#" style="color: #515a6e">
              3.蜀汉刘备——中年肥肉男佛系创业的不甘与坚持
            </a>
          </div>
          <div class="region-title">
            <a href="#" style="color: #515a6e">
              4.蜀汉刘备的巅峰之战——汉中争夺战全面回顾
            </a>
          </div>
          <div class="region-title">
            <a href="#" style="color: #515a6e">
              5.刘备三国创业版图，成也关张，败也关张
            </a>
          </div>
          <div class="region-title">
            <a href="#" style="color: #515a6e">
              6.鲜为人知的孙吴名将-贺齐的精彩故事
            </a>
          </div>
        </div>
        <div style="margin-top: 36px;">
          <region-bar title="推荐" style="margin-bottom: 16px;"></region-bar>
          <div class="recommend-box">
            <img class="recommend-box-image" src="http://www.e3ol.com/topics/upfiles/2017/201781910928236.jpg" alt="">
          </div>
          <div class="recommend-box-text">
            （转载）单骑定荆州：刘表年轻时比刘备还猛
          </div>
          <div class="recommend-box">
            <img class="recommend-box-image" src="http://www.e3ol.com/topics/upfiles/2017/201781910928236.jpg" alt="">
          </div>
          <div class="recommend-box-text">
            （转载）单骑定荆州：刘表年轻时比刘备还猛
          </div>
          <div class="recommend-box">
            <img class="recommend-box-image" src="http://www.e3ol.com/topics/upfiles/2017/201781910928236.jpg" alt="">
          </div>
          <div class="recommend-box-text">
            （转载）单骑定荆州：刘表年轻时比刘备还猛
          </div>
        </div>
        <!--</Affix>-->
      </i-col>
    </Row>
  </div>
</template>

<script>
  import BreadcrumbRoute from "@/components/BreadcrumbRoute"
  import RegionBar from "@/components/RegionBar"
  import ArticleCard from "@/components/ArticleCard"

  export default {
    name: "Interesting",
    components: {
      BreadcrumbRoute,
      RegionBar,
      ArticleCard
    },
    data() {
      return {}
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