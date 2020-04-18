<template>
  <div>
    <breadcrumb-route></breadcrumb-route>
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
      <Row :gutter="16">
        <template v-for="i in 6">
          <i-col :key="i" span="3">
            <div style="margin-bottom: 16px;text-align: center">
              <div style="width: 100%;overflow: hidden">
                <img width="136px" height="136px" src="http://www.e3ol.com/biography/pic/id/240/1.jpg" alt="">
              </div>
              <div>刘备</div>
            </div>
          </i-col>
        </template>
      </Row>
    </div>
    <div style="text-align: center;">
      <Page :total="200" size="small"/>
    </div>
  </div>
</template>

<script>
  import BreadcrumbRoute from "@/components/BreadcrumbRoute"
  import RegionBar from "@/components/RegionBar"

  export default {
    name: "Hero",
    components: {
      BreadcrumbRoute,
      RegionBar
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