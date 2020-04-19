<template>
  <div>
    <breadcrumb-route></breadcrumb-route>
    <Row :gutter="32">
      <i-col span="18">
        <slot name="content"></slot>
      </i-col>
      <i-col span="6">
        <!--<Affix :offset-top="92">-->
        <div>
          <slot name="right-top"></slot>
        </div>
        <div>
          <slot name="right-bottom"></slot>
        </div>
        <!--</Affix>-->
      </i-col>
    </Row>
  </div>
</template>

<script>
  import BreadcrumbRoute from "@/components/BreadcrumbRoute"

  export default {
    name: "ArticleLayout",
    components: {
      BreadcrumbRoute
    }
  }
</script>

<style scoped>

</style>