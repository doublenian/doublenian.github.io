<template>
  <div class="layout-footer flex flex-col">
    <div class="footer-info flex justify-between flex-1">
      <div
        class=" text-white"
        v-for="(item, index) in list"
        :key="'botttom' + index"
      >
        <p class=" text-font-18 mb-4">{{ item.titleZh }}</p>
        <ul class=" text-font-14 list-none" style="color:#7B7B7C">
          <li
            @click="gotoLink(sub)"
            class=" cursor-pointer"
            v-for="(sub, subIndex) in item.children"
            :key="'bottom' + index + 'sub' + subIndex"
          >
            {{ sub.titleZh }}
          </li>
        </ul>
      </div>
      <div class=" text-white">
        <p class=" text-font-18 mb-4">联系我们</p>
        <div class=" text-font-14 mb-2">
          <p>联系电话:</p>
          <p>18917974488</p>
        </div>
        <div class=" text-font-14">
          <p>公司地址:</p>
          <p>上海市徐汇区田林路418号B栋200233</p>
        </div>
      </div>
      <div class=" text-white">
        <img
          src="@/assets/images/home/ewm.png"
          alt=""
          width="85"
          height="85"
          class=" mb-2"
        />
        <p>关注维迈公众号<br />获取最新行业资讯</p>
      </div>
    </div>
    <div
      class=" text-white text-font-12 text-center py-2 w-full"
      style="background-color:#303132;color:lightgrey"
    >
      @ 2017 V-CAN All Right Reservered 维迈装饰集团 版权所有 沪ICP备
      160322530号-1
    </div>
  </div>
</template>

<script>
import { getCategory } from '@/api'

export default {
  data() {
    return {
      list: []
    }
  },
  async created() {
    let oneLevel = await this.getList(null, 2)
    console.log('====oneLevel====')
    console.log(oneLevel)
    let promises = oneLevel.map(c => this.getList(c.id))
    let twoLevels = await Promise.all(promises)
    let list = []
    oneLevel.forEach((item, index) => {
      list.push({
        ...item,
        children: twoLevels[index]
      })
    })
    this.list = list
  },
  methods: {
    getList(id, type) {
      return getCategory(id, type).then(ret => {
        console.log('====ret====')
        console.log(ret)
        let result = []
        if (ret.result) {
          result = ret.result.map(c => {
            return {
              id: c.id,
              titleZh: c.title.zh,
              href: c.link.herf
            }
          })
        } else {
          result = []
        }
        return result
      })
    },
    gotoLink(sub) {
      location.href = sub.href
    }
  }
}
</script>

<style lang="less">
.layout-footer {
  background-color: #000001;
  .footer-info {
    min-width: 1200px;
    margin: auto;
    padding: 30px 67px;
    .split-line {
      height: 90px;
      width: 0;
      border-left: 1px solid #7b7b7c;
      margin-top: 40px;
    }
  }
}
</style>