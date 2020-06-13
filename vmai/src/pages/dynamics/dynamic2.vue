<template>
  <div class="dynamic2-wrapper flex justify-between">
    <div class="left1 flex flex-col justify-between ">
      <img src="../../assets/images/logo-vcan.png" alt="" class="mx-auto" />
      <p class="p1">上海维迈科建集团有限公司</p>
      <p class="p2 text-left">关于维迈集团:</p>
      <p class="p3">
        上海维迈建筑装饰集团是一家文旅文创、古建筑、博物馆、奢侈品商业空间、五星酒店、高端办公空间设计、软装为一体的EPC总包国家高新技术企业及上海市专精特新企业。
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
        专精特新企业。 生产基地： 维迈集团生产基地坐落于苏州昆山市花
      </div>
    </div>
    <div class="right-wrapper ">
      <div
        class="item1 bg-cover bg-center"
        :style="{ backgroundImage: 'url(' + list[0][2].imageUrl + ')' }"
      >
        <div class="item1-desc">
          专精特新企业。 生产基地： 维迈集团生产基地坐落于苏州昆山市花
        </div>
      </div>
      <div class="item2 flex items-end">
        <div class="item2-image">
          <div
            class="image bg-cover bg-center"
            :style="{ backgroundImage: 'url(' + list[0][3].imageUrl + ')' }"
          ></div>
        </div>
        <p class="desc flex-1">
          一家文旅文创、古建筑、博物馆、奢侈品商业空间、五星酒店、高端办公空间设计、软装为一体的EPC总包国家高新技术企业及上海市专精特新企业。
        </p>
      </div>
      <div class="item3 flex items-end">
        <div
          class="item3-image  bg-cover bg-center"
          :style="{ backgroundImage: 'url(' + list[0][4].imageUrl + ')' }"
        ></div>
        <p class=" flex-1">
          上海维迈建筑装饰集团是一家文旅文创、古建筑、博物馆、奢侈品商业空间、五星酒店、高端办公空间设计、软装为一体的EPC总包国家高新技术企业及上海市专精特新企业。维迈集团生产基地
        </p>
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
  width: 1200px;
  margin: auto;
  margin-top: 30px;
  height: 523px;
  .left1 {
    width: 196px;
    height: 100%;
    font-size: 13px;
    img {
      width: 43px;
      height: 54px;
      display: block;
    }
    .p1 {
      font-size: 16px;
      font-weight: 500;
      padding-bottom: 2px;
      border-bottom: 3px solid rgba(253, 183, 50, 1);
    }
    .left1-image {
      width: 100%;
      height: 258px;
    }
  }
  .left2 {
    width: 384px;
    height: 100%;
    position: relative;
    .left2-desc {
      position: absolute;
      left: 24px;
      bottom: 24px;
      color: white;
      padding: 19px;
      width: 176px;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  .right-wrapper {
    width: 549px;
    .item1 {
      width: 549px;
      height: 231px;
      position: relative;
      .item1-desc {
        position: absolute;
        top: 30px;
        right: 30px;
        width: 176px;
        padding: 19px;
        color: white;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
    .item2 {
      width: 100%;
      position: relative;
      top: -60px;
      .item2-image {
        width: 316px;
        height: 176px;
        padding: 13px 13px 0 0;
        background-color: white;
        .image {
          width: 100%;
          height: 100%;
          margin-right: 13px;
        }
      }
    }
    .item3 {
      width: 100%;
      height: 163px;
      position: relative;
      top: -47px;
      .item3-image {
        width: 303px;
        height: 100%;
        margin-right: 13px;
      }
    }
  }
}
</style>