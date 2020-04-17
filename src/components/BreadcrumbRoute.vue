<template>
  <div style="display: flex;justify-content: flex-start;padding: 4px;">
    <span style="flex-grow: 0;flex-shrink: 0;color: #808695;">当前位置：</span>
    <Breadcrumb style="flex-grow: 1;flex-shrink: 0;">
      <template v-for="(item, index) in this.$route.meta.breadcrumbItems">
        <BreadcrumbItem :key="index" :to="item.active?item.to:''">{{item.text}}</BreadcrumbItem>
      </template>
    </Breadcrumb>
  </div>
</template>

<script>
  export default {
    name: "BreadcrumbRoute"
  }
</script>

<style scoped>

</style>