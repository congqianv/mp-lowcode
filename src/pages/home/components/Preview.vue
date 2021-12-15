<template>
  <div class="preview flex-1 flex-center">
    <div class="preview-area" @drop="onDrop" @dragover.prevent></div>
  </div>
</template>

<script setup lang="ts">
function onDrop (e: DragEvent) {
  console.log(e)
}
</script>

<style lang='less' scoped>
.preview {
  height: 100%;

  &-area {
    width: 375px;
    height: 667px;
    background: #fff;
    box-shadow: 10px -10px 20px #d1d1d1, -10px 10px 20px #ffffff;
    border-radius: 10px;
    margin: 20px 0;
  }
}
</style>