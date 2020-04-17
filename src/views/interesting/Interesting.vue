<template>
  <div>
    <breadcrumb-route bottomBorder></breadcrumb-route>
    <Row :gutter="32">
      <i-col span="18">
        <div>
          <div class="search-item">
            <div class="search-title">关键字：</div>
            <div class="search-body">
              <i-input size="small" placeholder="输入关键字"></i-input>
            </div>
            <div class="search-title" style="margin-left: 8px;">时间：</div>
            <div>
              <DatePicker size="small" type="daterange" placement="bottom-end" placeholder="选择时间"
                          style="width: 200px"></DatePicker>
            </div>
            <i-button size="small" style="margin-left: 32px;" type="primary">查询</i-button>
            <i-button size="small" style="margin-left: 8px;">重置</i-button>
          </div>
          <div class="search-item">
            <div class="search-title">所属势力：</div>
            <div class="search-body">
              <Tag checkable color="primary">不限</Tag>
              <Tag checkable :checked="false" color="primary">东汉</Tag>
              <Tag checkable :checked="false" color="primary">魏</Tag>
              <Tag checkable :checked="false" color="primary">蜀</Tag>
              <Tag checkable :checked="false" color="primary">吴</Tag>
              <Tag checkable :checked="false" color="primary">袁术</Tag>
              <Tag checkable :checked="false" color="primary">袁绍</Tag>
              <Tag checkable :checked="false" color="primary">刘表</Tag>
              <Tag checkable :checked="false" color="primary">起义军</Tag>
              <Tag checkable :checked="false" color="primary">董卓</Tag>
              <Tag checkable :checked="false" color="primary">刘璋</Tag>
              <Tag checkable :checked="false" color="primary">西晋</Tag>
              <Tag checkable :checked="false" color="primary">少数民族</Tag>
              <Tag checkable :checked="false" color="primary">在野</Tag>
              <Tag checkable :checked="false" color="primary">其他</Tag>
            </div>
          </div>
        </div>
        <div>
          Item
        </div>
      </i-col>
      <i-col span="6">
        <div>排行栏</div>
      </i-col>
    </Row>
  </div>
</template>

<script>
  import BreadcrumbRoute from "@/components/BreadcrumbRoute"

  export default {
    name: "Interesting",
    components: {
      BreadcrumbRoute
    },
    data() {
      return {
        formItem: {
          input: '',
          select: '',
          radio: 'male',
          checkbox: [],
          switch: true,
          date: '',
          time: '',
          slider: [20, 50],
          textarea: ''
        }
      }
    }
  }
</script>

<style scoped>
  .search-item {
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    display: flex;
    align-items: baseline;
  }

  .search-title {
    color: #808695;
    flex-grow: 0;
    flex-shrink: 0;
  }

  .search-body {
    flex-grow: 1;
    flex-shrink: 0;
    width: 0;
  }
</style>