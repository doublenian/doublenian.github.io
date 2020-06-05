<template>
  <div class="contact-us-wrapper">
    <div class="title-wrapper">联系我们</div>
    <div class="contact-us-container">
      <div class="container-title">
        关于维迈
      </div>
      <div class="about-body flex justify-between items-center">
        <div class="about-desc">
          <p class=" text-font-14 mb-4">上海维迈建筑装饰集团有限公司</p>
          <p class=" text-font-12">
            上海维迈建筑装饰集团有限公司创立于2007年，具有国家建筑装饰工程设
            计专项甲级、建筑装修装饰施工专业承包一级、展览展示工程设计与施工
            一体化一级等各项资质，是集建筑装饰设计施工为一体的综合性企业。集
            团成员有上海维迈建筑设计、上海维迈建筑工程、上海维迈空间设计、上
            海维迈文化传媒、上海维迈文化创意等五家成员公司。同时，在全国范围
            内有着完善的服务网，目前于北京、广州、天津、杭州、南京、苏州、无
            锡、泰州、南通、成都等城市均设有分公司办事处。
          </p>
        </div>
        <div class="bg-image"></div>
      </div>
      <div class="container-title">
        上海维迈建筑装饰集团各地分公司
      </div>
      <div class="company-site-wrapper">
        <div class="company-block">
          <p>维迈集团北京分公司</p>
          <div>
            <div>
              <p>地址:</p>
              <p>北京市昌平区陈家营中路8号院1号楼</p>
            </div>
            <div>
              <p>负责人:</p>
              <p>王德坤</p>
            </div>
            <div>
              <p>联系电话:</p>
              <p>13911983713</p>
            </div>
            <div>
              <p>邮箱:</p>
              <p>wdkzhr.wang@v-can.cn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.contact-us-wrapper {
  height: 100vh;
  background-color: white;
  padding-top: 160px;
  .title-wrapper {
    font-size: 28px;
    font-weight: bold;
    width: 180px;
    color: white;
    height: 50px;
    margin: auto;
    line-height: 50px;
    text-align: center;
    background: url('../../assets/images/木牌.png') no-repeat;
    background-size: cover;
    background-origin: center;
    background-position: center;
  }
  .contact-us-container {
    width: 900px;
    margin: auto;
    color: #333;
    .container-title {
      padding-bottom: 20px;
      border-bottom: 1px solid #ececec;
      font-size: 18px;
      margin-top: 50px;
    }
    .about-body {
      padding: 20px 0;
      .about-desc {
        flex: 1;
        margin-right: 70px;
        line-height: 2;
      }
      .bg-image {
        width: 300px;
        height: 200px;
        background: url('../../assets/images/promotion/背景.jpg') no-repeat;
        background-size: cover;
        background-origin: center;
        background-position: center;
      }
    }
  }
  .company-site-wrapper {
    .company-block {
      margin-top: 20px;
    }
  }
}
</style>