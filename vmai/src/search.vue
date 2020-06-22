<template>
  <div class="search-wrapper" @click.stop="$emit('close')">
    <div>
      <div class="search-header flex justify-center items-center">
        <div class="search-box flex">
          <div class="search-icon flex items-center justify-center">
            <img src="./assets/images/search/search.png" alt="" />
          </div>

          <input class="appearance-none " type="text" placeholder="搜索" />
          <div class="search-btn flex items-center justify-center">
            <img src="./assets/images/search/jiantou.png" alt="" />
          </div>
        </div>
      </div>
      <div class="search-body mx-auto">
        <div
          class="item flex"
          v-for="(item, index) in list"
          :key="'search' + index"
        >
          <div
            class="bg-image mr-6 bg-cover bg-center"
            :style="{ backgroundImage: 'url(' + item.imageUrl + ')' }"
          ></div>
          <div class="flex-1 flex flex-col justify-between">
            <div class="content">
              <p class="mb-1">{{ item.title }}</p>
              <p>
                {{ item.content }}
              </p>
            </div>

            <p class="date">{{ '发布日期：' + item.time }}</p>
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
        {
          imageUrl: require('./assets/images/dynamics/tupian3.jpg'),
          title: '维迈作品－PIAGET伯爵郑州大卫城店',
          content: '自1874年创立以来，PIAGET伯爵不断以精湛细腻的珠宝医生融合复',
          time: '2020-03-18'
        },
        {
          imageUrl: require('./assets/images/dynamics/tupian3.jpg'),
          title: '维迈作品－PIAGET伯爵郑州大卫城店',
          content: '自1874年创立以来，PIAGET伯爵不断以精湛细腻的珠宝医生融合复',
          time: '2020-03-18'
        },
        {
          imageUrl: require('./assets/images/dynamics/tupian3.jpg'),
          title: '维迈作品－PIAGET伯爵郑州大卫城店',
          content: '自1874年创立以来，PIAGET伯爵不断以精湛细腻的珠宝医生融合复',
          time: '2020-03-18'
        },
        {
          imageUrl: require('./assets/images/dynamics/tupian3.jpg'),
          title: '维迈作品－PIAGET伯爵郑州大卫城店',
          content: '自1874年创立以来，PIAGET伯爵不断以精湛细腻的珠宝医生融合复',
          time: '2020-03-18'
        }
      ]
    }
  }
}
</script>

<style lang="less">
.search-wrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  overflow: hidden;
  backdrop-filter: blur(5px);

  background-color: rgba(48, 54, 60, 0.8);
  padding-top: 45px;
  .search-header {
    margin: auto;
    width: 900px;
    height: 67px;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.6);
    .search-box {
      width: 464px;
      height: 35px;

      .search-icon {
        left: 0;
        top: 0;
        width: 30px;
        background-color: white;
        height: 35px;
        img {
          width: 15px;
          height: 15px;
        }
      }
      .search-btn {
        right: 0;
        bottom: 0;
        width: 42px;
        height: 35px;
        img {
          width: 20px;
        }
        background-color: #fdb732;
      }
      input {
        width: 100%;
        height: 100%;
        outline: none;
      }
    }
  }
  .search-body {
    width: 900px;
    margin-top: 13px;
    max-height: 507px;
    overflow-y: scroll;
    padding: 16px;
    background-color: white;
    .item {
      margin-top: 20px;
      .bg-image {
        width: 100px;
        height: 68px;
      }
      .content {
        font-size: 12px;
        color: #333;
        p:first-child {
          font-size: 13px;
          font-weight: bold;
        }
      }
      .date {
        font-size: 12px;
        color: #999999;
      }
    }
  }
}
</style>