<template>
  <div class="layout-default">
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content>
        <RouterView />
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
  import Header from "@/shared/ui/components/Header.vue";
</script>

<style lang="less" scoped>
.ant-layout-header,
.ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
.ant-layout-content {
  height: calc(100vh - 64px - 64px);;
}
</style>