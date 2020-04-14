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
          <el-tag type="success" v-if="clinicType">{{ clinicType }}</el-tag>
        </el-form-item>
        <el-button type="primary" plain @click="addRecord">创建一条</el-button>
        <el-button
          @click="drawer = true"
          type="primary"
          style="margin-left: 16px;"
        >
          查看录入列表
        </el-button>
      </el-form>
    </div>
    <h3>报告生成器</h3>
    <div
      style="width:50%;"
      v-for="(item, index) in list"
      :key="'generate' + index"
    >
      <el-card>
        <div slot="header">{{ item.title.en }}</div>
        <el-radio-group v-model="item.result">
          <el-radio
            :label="answer.id"
            v-for="(answer, index) in item.answer"
            :key="'answer' + index"
            >{{ answer.title.en }}</el-radio
          >
        </el-radio-group>
      </el-card>
    </div>
    <el-drawer title="" size="90%" :visible.sync="drawer" direction="rtl">
      <el-button type="warning" style="margin-bottom:10px" @click="download">
        下载</el-button
      >
      <span>{{ '总条数' + tableResults.length }}</span>
      <div style="width:100%;height:80vh;overflow:scroll">
        <el-table :data="tableResults" border>
          <el-table-column
            :prop="item.id"
            :label="item.title.en"
            v-for="(item, index) in list"
            :key="'table' + index"
          >
          </el-table-column>
          <el-table-column label="recommand" prop="recommand" width="160">
          </el-table-column>
          <el-table-column label="clinicType" prop="clinicType" width="120">
          </el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="{ row, $index }">
              <el-button type="danger" @click="deleteItem(row, $index)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import RecommandData from './recommand'
export default {
  data() {
    return {
      list: [],
      RecommandData,
      report: '',
      drawer: false,
      tableResults: [],
      config: {
        0: '无',
        1: 'Emergency Department',
        2: 'FHG Clinics'
      }
    }
  },
  computed: {
    clinicType() {
      if (this.report) {
        console.log(this.report)
        let data = JSON.parse(this.report)
        return this.config[data.type]
      } else {
        return ''
      }
    }
  },
  created() {
    let dataFiles = require.context('./data', false, /\.js$/)
    dataFiles.keys().forEach((c) => {
      console.log(c.replace('./', ''))
      let a = require(`./data/${c.replace('./', '')}`).default
      this.list.push(a)
    })
    this.clearSelected()
  },
  mounted() {
    this.tableResults = localStorage.getItem('tableResults')
      ? JSON.parse(localStorage.getItem('tableResults'))
      : []
  },
  methods: {
    addRecord() {
      let json = {}
      let report = JSON.parse(this.report)
      json['recommand'] = report.title
      json['clinicType'] = this.clinicType
      json['clinicId'] = report.type
      json['recommandId'] = report.title
      json['result'] = []
      let record = [...this.list]
      record.forEach((item) => {
        let findedAnswer = item.answer.find(
          (c) => JSON.stringify(c.id) === JSON.stringify(item.result)
        )
        json[item.id] = findedAnswer.title.en
        json['result'].push({
          [item.id]: findedAnswer.id
        })
      })
      this.tableResults.push(json)
      this.$message({
        type: 'success',
        message: '创建成功'
      })
      localStorage.setItem(
        'tableResults',
        JSON.stringify([...this.tableResults])
      )
      this.$nextTick(() => {
        this.clearSelected()
      })
      this.drawer = true
    },
    clearSelected() {
      this.list.forEach((c, index) => {
        this.$set(this.list[index], 'result', '')
      })
      this.report = ''
    },
    deleteItem(row, index) {
      let result = [...this.tableResults]
      result.splice(index, 1)
      localStorage.setItem('tableResults', JSON.stringify(result))
      this.tableResults = result
    },
    download() {
      let result = this.tableResults.map((c) => {
        return {
          id: c.id,
          result: c.result,
          recommandId: c.recommandId,
          clinicId: c.clinicId
        }
      })
      this.funDownload('export default ' + JSON.stringify(result), 'report.js')
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