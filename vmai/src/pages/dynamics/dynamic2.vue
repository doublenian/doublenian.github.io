<template>
  <div class="dynamic2-wrapper flex justify-between">
    <div class="left1 flex flex-col justify-between ">
      <img src="../../assets/images/logo-vcan.png" alt="" class="mx-auto" />
      <p class="p1 text-title">上海维迈科建集团有限公司</p>
      <p class="p2 text-left text-title">关于维迈集团:</p>
      <p class="p3 text-desc">
        上海维迈建筑装饰集团是一家文旅文创、古建筑、博物馆、奢侈品商业空间、五星酒店、高端办公空间
      </p>
      <div
        class="left1-image bg-cover bg-center"
        :style="{ backgroundImage: 'url(' + list[0][0].imageUrl + ')' }"
      ></div>
    </div>
    <div
      class="left2 bg-cover bg-center"
      :style="{ backgroundImage: 'url(' + list[0][1].imageUrl + ')' }"
    >
      <div class="left2-desc">
        <p class="text-title">关于维迈集团:</p>
        <p class="text-desc">
          上海维迈建筑装饰集团是一家文旅文创、古建筑、博物馆、奢侈品商业空间、五星酒店、高端办公空间设计、软装为一体的EPC总包国家高新技术企业及上海市专精特新企业。
        </p>
      </div>
    </div>
    <div class="right-wrapper ">
      <div
        class="item1 bg-cover bg-center"
        :style="{ backgroundImage: 'url(' + list[0][2].imageUrl + ')' }"
      >
        <div class="item1-desc">
          <p class="text-title">关于维迈集团:</p>
          <p class="text-desc">
            上海维迈建筑装饰集团是一家文旅文创、古建筑、博物馆、奢侈品商业空间
          </p>
        </div>
      </div>
      <div class="item2 flex items-end">
        <div class="item2-image">
          <div
            class="image bg-cover bg-center"
            :style="{ backgroundImage: 'url(' + list[0][3].imageUrl + ')' }"
          ></div>
        </div>
        <div class="desc flex-1">
          <div class="text-title">关于维迈集团:</div>
          <div class="text-desc">
            上海维迈建筑装饰集团是一家文旅文创、古建筑、博物馆、奢侈品商业空间、五星酒店、高端
          </div>
        </div>
      </div>
      <div class="item3 flex items-end">
        <div
          class="item3-image  bg-cover bg-center"
          :style="{ backgroundImage: 'url(' + list[0][4].imageUrl + ')' }"
        ></div>
        <div class=" flex-1">
          <div class="text-title">关于维迈集团:</div>
          <div class="text-desc">
            上海维迈建筑装饰集团是一家文旅文创、古建筑、博物馆、奢侈品商业空间、五星酒店、高端
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        [
          {
            imageUrl: require('../../assets/images/dynamics/tupian1.jpg'),
            title: ''
          },
          {
            imageUrl: require('../../assets/images/dynamics/tupian2.jpg'),
            title: ''
          },
          {
            imageUrl: require('../../assets/images/dynamics/tupian3.jpg'),
            title: ''
          },
          {
            imageUrl: require('../../assets/images/dynamics/tupian4.jpg'),
            title: ''
          },
          {
            imageUrl: require('../../assets/images/dynamics/tupian4.jpg'),
            title: ''
          }
        ]
      ]
    }
  }
}
</script>

<style lang="less">
.dynamic2-wrapper {
  width: 80vw;
  margin: auto;
  margin-top: 5vh;
  height: 68vh;
  .text-title {
    font-size: 1.1vw;
    font-weight: bold;
    margin-bottom: 1vh;
  }
  .text-desc {
    font-size: 1vw;
  }
  .left1 {
    width: 14vw;
    height: 100%;
    img {
      width: 3vw;
      display: block;
    }
    .p1 {
      padding-bottom: 2px;
      border-bottom: 3px solid rgba(253, 183, 50, 1);
    }
    .left1-image {
      width: 100%;
      height: 258px;
    }
  }
  .left2 {
    width: 27vw;
    height: 100%;
    position: relative;
    .left2-desc {
      position: absolute;
      left: 1.7vw;
      bottom: 24px;
      color: white;
      padding: 19px;
      width: 12.3vw;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  .right-wrapper {
    width: 38.4vw;
    .item1 {
      width: 100%;
      height: 30vh;
      position: relative;
      .item1-desc {
        position: absolute;
        top: 30px;
        right: 30px;
        width: 12.32vw;
        padding: 19px;
        color: white;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
    .item2 {
      width: 100%;
      position: relative;
      top: -8vh;
      .item2-image {
        width: 22.12vw;
        height: 23vh;
        padding: 0.9vw 0.9vw 0 0;
        background-color: white;
        .image {
          width: 100%;
          height: 100%;
          margin-right: 0.9vw;
        }
      }
    }
    .item3 {
      width: 100%;
      height: 21vh;
      position: relative;
      top: -6vh;
      .item3-image {
        width: 21vw;
        height: 100%;
        margin-right: 0.9vw;
      }
    }
  }
}
</style>