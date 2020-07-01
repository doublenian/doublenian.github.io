<template>
  <div class="contact-us-wrapper">
    <div class="title-wrapper">联系我们</div>
    <div class="map-container flex">
      <baidu-map
        class="map-body"
        :center="center"
        :zoom="zoom"
        :scroll-wheel-zoom="true"
      >
        <bm-marker
          v-for="(item, index) in list"
          :key="'marker' + index"
          :position="{ lng: item.lng, lat: item.lat }"
          @click="item.showInfoWindow = true"
          :icon="{ url: '/position.png', size: { width: 23, height: 25 } }"
        >
          >
          <bm-info-window
            :show="item.showInfoWindow"
            @close="item.showInfoWindow = false"
            @open="item.showInfoWindow = true"
            >{{ item.text }}</bm-info-window
          >
        </bm-marker>
      </baidu-map>
      <div class="map-info">
        <p class="title">上海维迈建筑装饰集团有限公司</p>
        <div class="item">
          <p class=" font-bold">地址:</p>
          <p>上海市普陀区真北路2167号（鸿海大厦）22层</p>
        </div>
        <div class="item">
          <p class=" font-bold">联系人:</p>
          <p>张建新</p>
        </div>
        <div class="item">
          <p class=" font-bold">联系电话:</p>
          <p>17602109258</p>
        </div>
        <div class="item">
          <p class=" font-bold">公司邮箱:</p>
          <p>peter.chen@v-can.cn</p>
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

export default {
  data() {
    return {
      center: { lng: 108.94589, lat: 34.383027 },
      zoom: 5,
      show: false,
      list: [
        {
          text: 'content1',
          lng: 116.404,
          lat: 39.915,
          showInfoWindow: false
        },
        {
          text: 'content2',
          lng: 118.404,
          lat: 36.915,
          showInfoWindow: false
        }
      ]
    }
  },
  methods: {
    infoWindowClose() {
      this.show = false
    },
    infoWindowOpen() {
      this.show = true
    }
  }

  //   mounted() {
  //     // 百度地图API功能
  //     var sContent =
  //       "<div style='padding:0px;width:300px;'>" +
  //       "<img style='object-fit:cover;' width='300' height='200' src='https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/clinicalNetwork/clinicList8.jpg'/>" +
  //       "<p style='margin-top:10px;line-height:1.5;font-size:14px;color:#333333'>天安门坐落在中国北京市中心,故宫的南侧,与天安门广场隔长安街相望,是清朝皇城的大门...</p>" +
  //       '</div>'
  //     var map = new window.BMap.Map('allmap')
  //     var point = new window.BMap.Point(108.94589, 34.383027)
  //     // var marker = new window.BMap.Marker(point)
  //     // var infoWindow = new window.BMap.InfoWindow(sContent) // 创建信息窗口对象
  //     map.centerAndZoom(point, 5)
  //     // map.addOverlay(marker)
  //     // 百度地图API功能

  //     var data_info = [
  //       [
  //         116.417854,
  //         39.921988,
  //         '地址：北京市东城区王府井大街88号乐天银泰百货八层'
  //       ],
  //       [106.241638, 38.490741, '地址：北京市东城区东华门大街'],
  //       [102.228541, 31.918753, '地址：北京市东城区正义路甲5号']
  //     ]
  //     // var opts = {
  //     //   width: 250, // 信息窗口宽度
  //     //   height: 80, // 信息窗口高度
  //     //   title: '信息窗口', // 信息窗口标题
  //     //   enableMessage: true //设置允许信息窗发送短息
  //     // }
  //     var opts = {
  //       boxStyle: {
  //         width: '300px',
  //         height: '240px'
  //       },
  //       enableAutoPan: true,
  //       align: window.INFOBOX_AT_TOP,
  //       closeIconUrl: '/position.png',
  //       closeIconMargin: '0px',
  //       closeIconZIndex: 1,
  //       closeIconWidth: '15px'
  //     }
  //     var myIcon = new window.BMap.Icon(
  //       '/position.png',
  //       new window.BMap.Size(23, 25),
  //       {
  //         // 指定定位位置。
  //         // 当标注显示在地图上时，其所指向的地理位置距离图标左上
  //         // 角各偏移10像素和25像素。您可以看到在本例中该位置即是
  //         // 图标中央下端的尖角位置。
  //         anchor: new window.BMap.Size(10, 25)
  //       }
  //     )
  //     for (var i = 0; i < data_info.length; i++) {
  //       var marker = new window.BMap.Marker(
  //         new window.BMap.Point(data_info[i][0], data_info[i][1]),
  //         { icon: myIcon }
  //       ) // 创建标注
  //       var content = data_info[i][2]
  //       map.addOverlay(marker) // 将标注添加到地图中
  //       addClickHandler(content, marker)
  //     }
  //     function addClickHandler(content, marker) {
  //       marker.addEventListener('click', function(e) {
  //         openInfo(content, e)
  //       })
  //     }
  //     function openInfo(content, e) {
  //       var p = e.target
  //       var point = new window.BMap.Point(
  //         p.getPosition().lng,
  //         p.getPosition().lat
  //       )
  //       var infoWindow = new window.BMapLib.InfoBox(sContent) // 创建信息窗口对象
  //       map.openInfoWindow(infoWindow, point) //开启信息窗口
  //     }
  //   }
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