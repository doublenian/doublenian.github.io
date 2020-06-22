<template>
  <div class="dynamic1-wrapper flex justify-between">
    <div class="left flex flex-col justify-between">
      <img src="@/assets/images/logo-vcan.png" alt="" class="title-image" />
      <div class="desc">
        <p class=" text-title font-extrabold mb-4" v-if="data[0].title">
          {{ data[0].title }}
        </p>
        <p class="text-desc" v-if="data[0].desc">
          {{ data[0].desc }}
        </p>
      </div>
      <div class="items-list mt-4">
        <div
          class="item flex justify-between"
          v-for="(item, index) in data.slice(1)"
          :key="'d1' + index"
        >
          <img :src="item.image" alt="" />
          <div class="ml-4">
            <p class="text-title  font-extrabold mb-2" v-if="item[index].title">
              {{ item[index].title }}
            </p>
            <p class=" text-desc font-normal" v-if="item[index].desc">
              {{ item[index].desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="right"
      :style="{ backgroundImage: 'url(' + data[0].image + ')' }"
    ></div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
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
    background-size: cover;
    background-origin: center;
    background-position: center;
  }
}
</style>