<template>
  <aside class="side">
    <section class="section">
      <div class="section-title">官方组件</div>
      <div class="section-blocks">
        <div
          class="section-item flex-column-center"
          v-for="(item, index) in officialList"
          :key="index"
          draggable="true"
        >
          <img class="section-item_img" :src="getImageUrl(item.icon)" />
          <div class="section-item_title">{{ item.name }}</div>
        </div>
      </div>
    </section>
  </aside>
</template>

<script setup lang="ts">
interface sectionItem {
  icon: string,
  name: string
}

import { reactive } from 'vue';

// 官方组件列表
let officialList: sectionItem[] = reactive([
  {
    icon: 'view',
    name: '视图容器 (view)'
  },
  {
    icon: 'image',
    name: '图片 (image)'
  },
  {
    icon: 'input',
    name: '输入框 (input)'
  },
])

// 动态获取组件图片
function getImageUrl(icon: string) {
  return new URL(`../../../assets/img/${icon}.png`, import.meta.url).href
}
</script>

<style lang='less' scoped>
.side {
  width: 300px;
  height: 100%;
  background: #ffffff;
  box-shadow: 10px 10px 20px #d9d9d9, -10px -10px 20px #ffffff;
  padding: 40px 0 30px 0;
}

.section {
  position: relative;
  padding: 0 30px;

  &-title {
    position: relative;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  &-blocks {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  &-item {
    border-radius: 6px;
    padding: 10px;
    background: linear-gradient(225deg, #e6e6e6, #ffffff);
    box-shadow: -10px 10px 20px #d1d1d1, 10px -10px 20px #ffffff;

    &_img {
      height: 32px;
      margin-bottom: 10px;
      pointer-events: none;
    }
  }
}
</style>