<template>
  <div>
    <div style="display: flex;justify-content: flex-start;padding: 10px 0;">
      <span style="flex-grow: 0;flex-shrink: 0;color: #808695;margin-right: 8px;">当前位置</span>
      <Breadcrumb style="flex-grow: 1;flex-shrink: 0;">
        <template v-for="(item, index) in this.$route.meta.breadcrumbItems">
          <BreadcrumbItem :key="index" :to="item.active?item.to:''">{{item.text}}</BreadcrumbItem>
        </template>
      </Breadcrumb>
    </div>
    <div v-if="bottomBorder" style="border-bottom: 1px solid #dcdee2;width: 100%;"></div>
  </div>
</template>

<script>
  export default {
    name: "BreadcrumbRoute",
    props: {
      bottomBorder: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>

</style>