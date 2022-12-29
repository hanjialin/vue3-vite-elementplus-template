<template>
  <el-config-provider :locale="locale" :size="size">
    <App />
  </el-config-provider>
</template>

<script lang="ts" setup>
import App from '@/App.vue'
import useConfig from '@/hooks/utils/ui-config/useConfig'
const locale = useConfig().locale
const size = useConfig().size
</script>

<style lang="scss" scoped></style>
