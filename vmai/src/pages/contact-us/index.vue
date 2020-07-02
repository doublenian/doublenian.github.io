<template>
  <div class="contact-us-wrapper">
    <div class="title-wrapper">联系我们</div>
    <div class="map-container flex">
      <baidu-map
        class="map-body"
        :center="center"
        :zoom="zoom"
        :scroll-wheel-zoom="true"
        @ready="readyHanlder"
      >
        <bm-marker
          v-for="(item, index) in list"
          :key="'marker' + index"
          :position="{ lng: item.lng, lat: item.lat }"
          @click="showWindow(item)"
          :icon="{ url: '/position.png', size: { width: 23, height: 25 } }"
        >
          <bm-info-window
            :show="item.showInfoWindow"
            @close="item.showInfoWindow = false"
            @open="showWindow(item)"
          >
            <div class="bm-info-wrapper">
              <img :src="item.bg.md" alt="" />
              <p>
                {{ item.address.zh }}
              </p>
            </div>
          </bm-info-window>
        </bm-marker>
      </baidu-map>
      <div class="map-info" v-if="currentInfo.name">
        <p class="title">{{ currentInfo.name.zh }}</p>
        <div class="item">
          <p class=" font-bold">地址:</p>
          <p>{{ currentInfo.address.zh }}</p>
        </div>
        <div class="item">
          <p class=" font-bold">联系人:</p>
          <p>{{ currentInfo.contact.zh }}</p>
        </div>
        <div class="item">
          <p class=" font-bold">联系电话:</p>
          <p>{{ currentInfo.mobile }}</p>
        </div>
        <div class="item">
          <p class=" font-bold">公司邮箱:</p>
          <p>{{ currentInfo.email }}</p>
        </div>
        <div class="item">
          <img src="../../assets/images/home/ewm.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//坐标拾取 https://api.map.baidu.com/lbsapi/getpoint/index.html
//background-image: url("https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/clinicalNetwork/clinicList8.jpg");
import { listCompany } from '@/api'

export default {
  data() {
    return {
      center: { lng: 108.94589, lat: 39.883027 },
      zoom: 5,
      show: false,
      currentInfo: {},
      list: []
    }
  },
  mounted() {},
  methods: {
    readyHanlder() {
      listCompany().then(ret => {
        let { result } = ret
        this.list = result.map(c => {
          return {
            ...c,
            lng: c.lng_lat.split(',')[0],
            lat: c.lng_lat.split(',')[1],
            showInfoWindow: false
          }
        })
        this.list[0].showInfoWindow = true
        this.currentInfo = this.list[0]
      })
    },
    showWindow(info) {
      info.showInfoWindow = true
      this.currentInfo = info
    }
  }
}
</script>

<style lang="less">
.contact-us-wrapper {
  background-color: white;
  padding-top: 12vh;
  min-height: 100vh;
  .title-wrapper {
    font-size: 28px;
    font-weight: bold;
    width: 18vw;
    color: white;
    height: 7vh;
    margin: auto;
    line-height: 7vh;
    text-align: center;
    background: url('../../assets/images/木牌.png') no-repeat;
    background-size: cover;
    background-origin: center;
    background-position: center;
  }
  .map-container {
    height: 75vh;
    margin-top: 5vh;
    .map-body {
      width: 65vw;
      height: 100%;
      .BMap_Marker > div > img {
        max-width: 100%;
        height: auto;
      }
      .bm-info-wrapper {
        padding: 0px 0;
        width: 300px;
        img {
          width: 300px;
          margin-top: 10px;
          object-fit: cover;
        }
        p {
          margin-top: 10px;
          color: #333333;
        }
      }
    }
    .map-info {
      padding: 4vh 2vw 0;
      .title {
        line-height: 1.5;
        padding-bottom: 2vh;
        border-bottom: 1px solid rgba(204, 204, 204, 1);
        color: #e26b23;
        font-size: 1.2vw;
        font-weight: bold;
        margin-bottom: 5vh;
      }
      .item {
        padding-left: 8px;
        border-left: 1px solid rgba(204, 204, 204, 1);
        font-size: 1vw;
        line-height: 1.5;
        margin-bottom: 3vh;
        p:first-child {
          color: #333333;
        }
        p:last-child {
          color: #666666;
        }
      }
    }
  }
}
</style>