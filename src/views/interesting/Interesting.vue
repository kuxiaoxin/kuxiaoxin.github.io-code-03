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
        <div>
          <template v-for="i in 10">
            <article-card :key="i" style="margin-top: 16px;"></article-card>
          </template>
        </div>
        <div style="text-align: center;margin-top: 16px;">
          <Page :total="200" size="small" />
        </div>
      </i-col>
      <i-col span="6">
        <div>
          <region-bar title="排行板"></region-bar>
        </div>
        <div style="margin-top: 36px;">
          <region-bar title="推荐"></region-bar>
        </div>
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
</style>