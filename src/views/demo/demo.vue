<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <el-button plain type="success" @click="toggleDark()">切换主题</el-button>
  <HelloWorld msg="Vite + Vue" />
  <el-date-picker type="date"></el-date-picker>
</template>

<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'
import useConfig from '@/hooks/utils/ui-config/useConfig'
const { toggleDark } = useConfig()
</script>

<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
