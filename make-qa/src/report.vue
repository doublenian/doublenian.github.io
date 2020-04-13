<template>
  <div class="report-container">
    <div class="report">
      <el-form>
        <el-form-item label="请选择报告:">
          <el-radio-group v-model="report">
            <el-radio
              :label="JSON.stringify(item)"
              border
              v-for="(item, index) in RecommandData"
              :key="'recommand' + index"
              >{{ item.title }}</el-radio
            >
          </el-radio-group>
        </el-form-item>

        <el-form-item label="诊所列表类型:">
          <el-radio-group v-model="clickType">
            <el-radio :label="0">无</el-radio>
            <el-radio :label="1">Emergency Department</el-radio>
            <el-radio :label="2">FHG Clinics</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-button type="primary" plain @click="generate">生成报告js</el-button>
      </el-form>
    </div>
    <h3>报告生成器</h3>
    <div
      style="width:50%;"
      v-for="(item, index) in list"
      :key="'generate' + index"
    >
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
import RecommandData from './recommand'
export default {
  data() {
    return {
      list: [],
      clickType: '',
      resultList: [],
      resultZh: '',
      resultEn: '',
      RecommandData,
      report: ''
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
      let data = JSON.parse(this.report)
      let json = {
        answer: [...this.resultList],
        report: {
          zh: data.zh,
          en: data.en
        },
        type: this.clickType
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
  .el-radio-group {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
  }
  .el-radio {
    margin: 10px;
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
.report-item {
  width: 100%;
  border: 1px solid #888;
  margin-bottom: 10px;
}
</style>