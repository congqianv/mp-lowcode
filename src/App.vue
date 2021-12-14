<template>
  <Header />
  <div class="content">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Header from '_c/Header/index.vue'
</script>

<style lang="less">
.content {
  width: 100%;
  height: calc(100% - 5rem);
}
</style>
