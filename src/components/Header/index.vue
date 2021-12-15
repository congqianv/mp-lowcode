<template>
  <header class="header flex-space-between">
    <nav class="site-title" href="/">
      <a href="/">小程序在线制作</a>
    </nav>
  </header>
  <!-- 占位 -->
  <header class="header-placeholder"></header>
</template>

<script setup>

</script>

<style lang="less">
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 60px;
  background: #fff;
  box-shadow: 0 5px 10px 0 #eee;
  padding: 0 30px;

  .site-title {
    width: fit-content;
    font-family: site-title;
    font-size: 30px;
    color: #57606f;

    a {
      color: #57606f;
      text-decoration: none;
    }
  }
}

.header-placeholder {
  width: 100%;
  height: 60px;
}
</style>
