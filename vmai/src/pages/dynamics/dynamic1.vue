<template>
  <div class="dynamic1-wrapper flex justify-between">
    <div class="left flex flex-col justify-between">
      <img src="@/assets/images/logo-vcan.png" alt="" class="title-image" />
      <div class="desc">
        <p class=" text-title font-extrabold mb-4">关于维迈集团：</p>
        <p class="  text-desc">
          上海维迈建筑装饰集团是一家文旅文创、古建筑、博物馆、奢侈品商业空间、五星酒店、高端办公空间设计、软装为一体的EPC总包国家高新技术企业及上海市专精特新企业。
        </p>
      </div>
      <div class="items-list mt-4">
        <div class="item flex justify-between" v-for="i in 3" :key="i">
          <img src="../../assets/images/dynamics/d1.png" alt="" />
          <div class="ml-4">
            <p class="text-title  font-extrabold mb-2">关于维迈集团：</p>
            <p class=" text-desc font-normal">
              上海维迈建筑装饰集团是一家文旅文创、古建筑、博物馆、奢侈品商业空间、五星酒店、高端发
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.dynamic1-wrapper {
  width: 80vw;
  margin: auto;
  margin-top: 5vh;
  height: 68vh;
  .text-title {
    font-size: 1.1vw;
  }
  .text-desc {
    font-size: 1vw;
  }
  .left {
    width: 47vw;
    height: 100%;

    .title-image {
      width: 2.6vw;
      height: 6vh;
      display: block;
      margin: auto;
    }
    .desc {
      color: #333333;
    }
    .items-list {
      .item {
        margin-top: 1.5vh;
        img {
          width: 15vw;
          height: 13.5vh;
        }
      }
    }
  }
  .right {
    width: 52vw;
    height: 100%;
    background: url('../../assets/images/dynamics/d1.png') no-repeat;
    background-size: cover;
    background-origin: center;
    background-position: center;
  }
}
</style>