<template>
  <header class="header">
    <nav class="site-title" href="/">
      <a href="/">小程序在线制作</a>
    </nav>
  </header>
  <!-- 占位 -->
  <div class="header-placeholder"></div>
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
  height: 5rem;
  background: #fff;
  box-shadow: 0 0.4167rem 0.8333rem 0 #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;

  .site-title {
    width: fit-content;
    font-family: site-title;
    font-size: 2.5rem;
    color: #57606f;

    a {
      color: #57606f;
      text-decoration: none;
    }
  }
}

.header-placeholder {
  width: 100%;
  height: 5rem;
}
</style>
