<template>
  <page-layout :def="def">
    <region-bar title="笑谈三国" style="margin-bottom: 12px;"></region-bar>
    <div class="article-box">
      <h2 style="text-align: center">{{title}}</h2>
      <div style="text-align: center;margin-top: 16px;font-size: 16px;">
        <span style="display: inline-flex;justify-content: center;align-items: center;">
          <Icon type="md-time"/>
          <span style="margin-left: 4px">{{time}}</span>
        </span>
        <span style="display: inline-flex;justify-content: center;align-items: center;margin-left: 16px;">
          <Icon type="md-eye"/>
          <span style="margin-left: 4px">{{heat}}</span>
        </span>
      </div>
      <div style="font-size: 16px;">
        <slot></slot>
      </div>
    </div>
  </page-layout>
</template>

<script>
  import PageLayout from "@/components/layout/PageLayout"
  import RegionBar from "@/components/RegionBar"

  export default {
    name: "ArticleLayout",
    props: {
      def: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: '刘禅追谥尚欠赵云一个正点'
      },
      time: {
        type: String,
        default: '2020-04-01'
      },
      heat: {
        type: String,
        default: '1.2k'
      }
    },
    components: {
      PageLayout,
      RegionBar
    }
  }
</script>

<style scoped>
  .article-box {
    width: 100%;
    /*border: 1px solid #dcdee2;*/
    box-shadow: 0 0 3px #888888;
    padding: 32px;
  }
</style>