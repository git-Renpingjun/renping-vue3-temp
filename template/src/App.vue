<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: feishuColor,
        colorInfo: feishuColor,
      },
    }"
    :locale="currentLocale"
  >
  <h1>Hello, Vue 3 Template</h1>
</a-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN'

const currentLocale = ref(zhCN);
const feishuColor = '#1456f0'
</script>

<style scoped>
</style>
