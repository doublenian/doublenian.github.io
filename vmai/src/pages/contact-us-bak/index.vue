<template>
  <div class="contact-us-wrapper">
    <div class="title-wrapper">联系我们</div>
    <div class="contact-us-container">
      <div class="container-title font-bold">
        关于维迈
      </div>
      <div class="about-body flex justify-between items-center">
        <div class="about-desc">
          <p class=" text-font-16 mb-4">上海维迈建筑装饰集团有限公司</p>
          <p class=" text-font-14">
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
      <div class="container-title font-bold">
        上海维迈建筑装饰集团各地分公司
      </div>
      <div class="company-site-wrapper flex flex-wrap justify-between">
        <div
          class="company-block"
          :style="{ border: '1px solid ' + item.color }"
          v-for="(item, index) in companyList"
          :key="'company' + index"
        >
          <p
            class="company-title  text-font-22 text-white"
            :style="{ backgroundColor: item.color }"
          >
            {{ item.title }}
          </p>
          <div class="company-profile text-font-14">
            <div class="flex">
              <p class=" font-extrabold">地址:</p>
              <p class="ml-2">{{ item.address }}</p>
            </div>
            <div class="flex">
              <p class=" font-extrabold">负责人:</p>
              <p class="ml-2">{{ item.owner }}</p>
            </div>
            <div class="flex">
              <p class=" font-extrabold">联系电话:</p>
              <p class="ml-2">{{ item.mobile }}</p>
            </div>
            <div class="flex">
              <p class=" font-extrabold">邮箱:</p>
              <p class="ml-2">{{ item.email }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-title font-bold">
        联系方式
      </div>
      <div class="link-contact-content ">
        <div class="flex flex-wrap ">
          <div
            class="link-item flex items-center "
            v-for="(item, index) in contactList"
            :key="'contacts' + index"
          >
            <img :src="item.icon" alt="" />
            <div class="ml-6">
              <p class=" text-font-14 mb-2" style="color:#454549">
                {{ item.title }}
              </p>
              <p class=" text-font-12" style="color:#626262">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" w-full">
      <iframe src="/map-iframe.html" class="iframe-bottom"></iframe>
    </div>
  </div>
</template>

<script>
import companyList from './company'
import mobile from '../../assets/images/contact-us/mobile.png'
import chuanzhen from '../../assets/images/contact-us/chuanzhen.png'
import mail from '../../assets/images/contact-us/mail.png'
import address from '../../assets/images/contact-us/address.png'
export default {
  data() {
    return {
      companyList,
      contactList: [
        {
          icon: mobile,
          title: '公司热线',
          desc: '021-64707511'
        },
        {
          icon: mobile,
          title: '咨询热线',
          desc: '189 1787 4488'
        },
        {
          icon: chuanzhen,
          title: '公司传真',
          desc: '021－64707522'
        },
        {
          icon: mail,
          title: '公司邮箱',
          desc: 'peter.chen@v-can.cn'
        },
        {
          icon: address,
          title: '公司地址',
          desc: '上海市普陀区真北路2167号（鸿海大厦）22层'
        }
      ]
    }
  }
}
</script>

<style lang="less">
.contact-us-wrapper {
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
        line-height: 1.5;
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
      width: 440px;
      margin-top: 20px;
      // border: 1px solid #fdb732;
      .company-title {
        height: 56px;
        line-height: 56px;
        // background-color: #fdb732;
        text-align: center;
      }
      .company-profile {
        height: 146px;
        padding: 19px 19px 0 19px;
        color: #333333;
        div {
          margin-bottom: 5px;
        }
      }
    }
  }
  .link-contact-content {
    .link-item {
      width: 33%;
      margin-top: 20px;
      img {
        width: 32px;
        height: 32px;
      }
    }
  }
  .iframe-bottom {
    margin-top: 40px;
    width: 100%;
    height: 356px;
    overflow: hidden;
  }
}
</style>