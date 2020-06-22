<template>
  <div class="dynamic2-wrapper flex justify-between">
    <div class="left1 flex flex-col justify-between ">
      <img src="../../assets/images/logo-vcan.png" alt="" class="mx-auto" />
      <p class="p1 text-title">上海维迈科建集团有限公司</p>
      <p class="p2 text-left text-title" v-if="data[0].title">
        {{ data[0].title }}
      </p>
      <p class="p3 text-desc" v-if="data[0].desc">
        {{ data[0].desc }}
      </p>
      <div
        class="left1-image bg-cover bg-center"
        :style="{ backgroundImage: 'url(' + data[0].image + ')' }"
      ></div>
    </div>
    <div
      class="left2 bg-cover bg-center"
      :style="{ backgroundImage: 'url(' + data[1].image + ')' }"
    >
      <div class="left2-desc">
        <p class="text-title" v-if="data[1].title">{{ data[1].title }}</p>
        <p class="text-desc" v-if="data[1].desc">
          {{ data[1].desc }}
        </p>
      </div>
    </div>
    <div class="right-wrapper ">
      <div
        class="item1 bg-cover bg-center"
        :style="{ backgroundImage: 'url(' + data[2].image + ')' }"
      >
        <div class="item1-desc">
          <p class="text-title" v-if="data[2].title">{{ data[2].title }}</p>
          <p class="text-desc" v-if="data[2].desc">
            {{ data[2].desc }}
          </p>
        </div>
      </div>
      <div class="item2 flex items-end">
        <div class="item2-image">
          <div
            class="image bg-cover bg-center"
            :style="{ backgroundImage: 'url(' + data[3].image + ')' }"
          ></div>
        </div>
        <div class="desc flex-1">
          <div class="text-title" v-if="data[3].title">{{ data[3].title }}</div>
          <div class="text-desc" v-if="data[3].desc">
            {{ data[3].desc }}
          </div>
        </div>
      </div>
      <div class="item3 flex items-end">
        <div
          class="item3-image  bg-cover bg-center"
          :style="{ backgroundImage: 'url(' + data[4].image + ')' }"
        ></div>
        <div class=" flex-1">
          <div class="text-title" v-if="data[4].title">{{ data[4].title }}</div>
          <div class="text-desc" v-if="data[4].desc">
            {{ data[4].desc }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {}
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
    width: 26.5vw;
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