<template>
  <div class="about">
    <breadcrumb-route></breadcrumb-route>
    <empty-div title="关于"></empty-div>
  </div>
</template>

<script>
  import BreadcrumbRoute from "@/components/BreadcrumbRoute"
  import EmptyDiv from "@/components/EmptyDiv"

  export default {
    name: 'About',
    components: {
      BreadcrumbRoute,
      EmptyDiv
    }
  }
</script>