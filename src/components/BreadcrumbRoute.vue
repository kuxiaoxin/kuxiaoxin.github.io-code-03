<template>
  <Breadcrumb>
    <template v-for="(item, index) in this.$route.meta.breadcrumbItems">
      <BreadcrumbItem :key="index" :to="item.active?item.to:''">{{item.text}}</BreadcrumbItem>
    </template>
  </Breadcrumb>
</template>

<script>
  export default {
    name: "BreadcrumbRoute"
  }
</script>

<style scoped>

</style>