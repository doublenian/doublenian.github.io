<template>
  <div class="dynamic1-wrapper flex justify-between">
    <div class="left flex flex-col justify-between">
      <img src="@/assets/images/logo-vcan.png" alt="" class="title-image" />
      <div class="desc">
        <p class=" text-font-16 font-extrabold mb-4">关于维迈集团：</p>
        <p class="  text-font-14">
          上海维迈建筑装饰集团是一家文旅文创、古建筑、博物馆、奢侈品商业空间、五星酒店、高端办公空间设计、软装为一体的EPC总包国家高新技术企业及上海市专精特新企业。
        </p>
      </div>
      <div class="items-list mt-4">
        <div class="item flex justify-between" v-for="i in 3" :key="i">
          <img src="../../assets/images/dynamics/d1.png" alt="" />
          <div class="ml-4">
            <p class=" text-font-16 font-extrabold mb-2">关于维迈集团：</p>
            <p class=" text-font-14 font-normal">
              上海维迈建筑装饰集团是一家文旅文创、古建筑、博物馆、奢侈品商业空间、五星酒店、高端办公空间设计、软装为一体的EPC总包国家高新技术企业及上海市专精特新企业。
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
  width: 1200px;
  margin: auto;
  margin-top: 43px;
  height: 564px;
  .left {
    width: 550px;
    height: 100%;

    .title-image {
      width: 50px;
      height: 60px;
      display: block;
      margin: auto;
    }
    .desc {
      color: #333333;
    }
    .items-list {
      .item {
        margin-top: 16px;
        img {
          width: 199px;
          height: 112px;
        }
      }
    }
  }
  .right {
    width: 608px;
    height: 100%;
    background: url('../../assets/images/dynamics/d1.png') no-repeat;
    background-size: cover;
    background-origin: center;
    background-position: center;
  }
}
</style>