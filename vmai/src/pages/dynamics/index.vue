<template>
  <div class="dynamics-content-wrapper">
    <div class="title-wrapper">集团动态</div>
    <dynamic1></dynamic1>
  </div>
</template>

<script>
import dynamic1 from './dynamic1'
import dynamic2 from './dynamic2'
export default {
  components: {
    dynamic1
    // dynamic2
  }
}
</script>

<style lang="less">
.dynamics-content-wrapper {
  background-color: white;
  padding-top: 160px;
  padding-bottom: 30px;
  min-height: 100vh;
  .title-wrapper {
    font-size: 28px;
    font-weight: bold;
    width: 180px;
    color: white;
    height: 50px;
    margin: auto;
    line-height: 50px;
    text-align: center;
    background: url('../../assets/images/木牌.png') no-repeat;
    background-size: cover;
    background-origin: center;
    background-position: center;
  }
  .dynamics-body {
  }
}
</style>