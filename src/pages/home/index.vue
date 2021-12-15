<template>
  <div class="flex-space-between" style="height: 100%">
    <SideBar />
    <Preview />
    <Config />
  </div>
</template>

<script setup>
import SideBar from './components/SideBar.vue';
import Config from './components/Config.vue';
import Preview from './components/Preview.vue'
</script>

<style lang='less' scoped>
</style>