<template>
  <div class="report-container">
    <div class="report">
      <el-form>
        <el-form-item label="报告中文">
          <el-input
            v-model="resultZh"
            type="textarea"
            placeholder="请输入报告中文"
          ></el-input>
        </el-form-item>
        <el-form-item label="报告英文">
          <el-input
            v-model="resultEn"
            type="textarea"
            placeholder="请输入报告英文"
          ></el-input>
        </el-form-item>
        <el-button type="primary" plain @click="generate">生成报告js</el-button>
      </el-form>
    </div>
    <h3>报告生成器</h3>
    <div style="width:50%;" v-for="(item, index) in list" :key="index">
      <el-card>
        <div slot="header">{{ item.title.zh }}</div>
        <el-checkbox-group v-model="resultList">
          <el-checkbox
            :label="answer.id"
            v-for="(answer, index) in item.answer"
            :key="'answer' + index"
            >{{ answer.title.zh }}</el-checkbox
          >
        </el-checkbox-group>
      </el-card>
    </div>
  </div>
</template>

<script>
// let datas = []

export default {
  data() {
    return {
      list: [],
      resultList: [],
      resultZh: '',
      resultEn: ''
    }
  },
  mounted() {
    let dataFiles = require.context('./data', false, /\.js$/)
    dataFiles.keys().forEach((c) => {
      console.log(c.replace('./', ''))
      let a = require(`./data/${c.replace('./', '')}`).default
      this.list.push(a)
    })
  },
  methods: {
    generate() {
      let json = {
        answer: [...this.resultList],
        report: {
          zh: this.resultZh,
          en: this.resultEn
        }
      }
      let reportIndex = localStorage.getItem('reportIndex') || 0
      localStorage.setItem('reportIndex', parseInt(reportIndex) + 1)
      this.funDownload(
        'export default ' + JSON.stringify(json),
        'report' + reportIndex + '.js'
      )
    },
    funDownload(content, filename) {
      // 创建隐藏的可下载链接
      var eleLink = document.createElement('a')
      eleLink.download = filename
      eleLink.style.display = 'none'
      // 字符内容转变成blob地址
      var blob = new Blob([content])
      eleLink.href = URL.createObjectURL(blob)
      // 触发点击
      document.body.appendChild(eleLink)
      eleLink.click()
      // 然后移除
      document.body.removeChild(eleLink)
    }
  }
}
</script>

<style  lang="less" >
.report-container {
  margin: auto;
  width: 90%;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  .el-checkbox {
    margin-top: 10px !important;
  }
}
.report {
  position: fixed;
  left: 50%;
  width: 45%;
  height: 400px;
  margin-top: 65px;
  padding: 20px;
}
</style>