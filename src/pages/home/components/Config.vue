<template>
  <div class="config">
    <div class="config-title">基本设置</div>
  </div>
</template>

<script>

</script>

<style lang='less' scoped>
.config {
  width: 360px;
  height: 100%;
  background: #fff;
  box-shadow: -10px 10px 20px #d1d1d1, 10px -10px 20px #ffffff;
  padding: 40px 0 30px 0;

  &-title {
    position: relative;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    width: fit-content;
    margin: 0 auto 20px auto;

    &::before,
    &::after {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      content: "";
      width: 30px;
      height: 2px;
      background: #d1d1d1;
      border-radius: 20px;
    }

    &::before {
      left: -40px;
    }

    &::after {
      right: -40px;
    }
  }
}
</style>