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
        <a
          :href="item.href"
          target="_blank"
          class="item flex justify-between block"
          v-for="(item, index) in data.slice(1)"
          :key="'d1' + index"
        >
          <img :src="item.image" alt="" />
          <div class="ml-4 flex-1 mr-1">
            <p class="text-title  font-extrabold mb-2" v-if="item.title">
              {{ item.title }}
            </p>
            <p class=" text-desc font-normal" v-if="item.desc">
              {{ item.desc }}
            </p>
          </div>
        </a>
      </div>
    </div>
    <a
      class="right block"
      :href="data[0].href"
      target="_blank"
      :style="{ backgroundImage: 'url(' + data[0].image + ')' }"
    ></a>
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
      display: inline-block;
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