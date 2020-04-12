<template>
  <div id="app">
    <div class="container">
      <div
        style="text-align:center;margin-bottom:20px;font-weight:bold;font-size:20px"
      >
        题目生成器
      </div>
      <div class="demo-block" v-if="model.type">
        <p>题目类型示例</p>
        <div>
          <img :src="demoImageSrc" alt="" />
        </div>
      </div>
      <el-form label-width="80px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="文件名称">
              <el-input
                v-model="model.fileName"
                placeholder="请输入英文名称，例如isTravelled"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="题目编号">
              <el-input
                v-model="model.id"
                placeholder="请输入26个英文字母大写,例如A,B,C"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="题目类型">
              <el-select
                v-model="model.type"
                placeholder="请选择题目类型"
                @change="choose()"
                style="width:100%"
              >
                <el-option
                  :label="item.label"
                  :value="item.value"
                  v-for="(item, index) in qaType"
                  :key="'qaType' + index"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="题目名称">
          <el-table :data="model.titleTable" style="width: 65%" border>
            <el-table-column prop="en" label="英文" header-align="center">
              <template slot-scope="{ row }">
                <el-input
                  v-model="row.en"
                  type="textarea"
                  placeholder="请输入题目英文"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="zh" label="中文" header-align="center">
              <template slot-scope="{ row }">
                <el-input
                  v-model="row.zh"
                  type="textarea"
                  placeholder="请输入题目中文"
                ></el-input>
              </template>
            </el-table-column>
          </el-table>
        </el-form-item>
        <el-form-item label="题目选项">
          <div style="text-align:left">
            <el-button
              type="primary"
              size="mini"
              @click="
                model.optionsTable.push({
                  id: model.id + (model.optionsTable.length + 1),
                  en: '',
                  zh: ''
                })
              "
              >添加选项</el-button
            >
          </div>
          <el-table :data="model.optionsTable" style="width: 65%" border>
            <el-table-column prop="en" label="英文" header-align="center">
              <template slot-scope="{ row }">
                <el-input
                  v-model="row.en"
                  type="textarea"
                  placeholder="请输入选项英文"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="zh" label="中文" header-align="center">
              <template slot-scope="{ row }">
                <el-input
                  v-model="row.zh"
                  type="textarea"
                  placeholder="请输入选项中文"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column label="操作" header-align="center" width="80px">
              <template slot-scope="{ $index }">
                <el-button
                  type="danger"
                  size="mini"
                  @click="model.optionsTable.splice($index, 1)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
            <el-table-column
              label="反选其他"
              header-align="center"
              width="80px"
              v-if="model.type === 'multi-choice'"
            >
              <template slot-scope="{ $index, row }">
                <el-switch
                  v-model="row.reverse"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                >
                </el-switch>
              </template>
            </el-table-column>
          </el-table>
        </el-form-item>
        <el-button type="primary" @click="submit">点击下载js文件</el-button>
      </el-form>
    </div>
    <el-dialog> </el-dialog>
  </div>
</template>

<script>
import { Capital } from './config'
import multiChoice from './assets/multi-choice.png'
import multiQuestion from './assets/multi-question.png'
import oneButtonChoice from './assets/one-button-choice.png'
import oneChoicePill from './assets/one-choice-pill.png'

export default {
  name: 'App',
  data() {
    return {
      qaIdIndex: 0,
      demoImageSrc: '',
      qaType: [
        {
          label: '单选题',
          value: 'one-choice-pill'
        },
        {
          label: '多选题',
          value: 'multi-choice'
        },
        {
          label: '单选按钮(判断题)',
          value: 'one-button-choice'
        },
        {
          label: '多个问题',
          value: 'multi-question'
        }
      ],
      model: {
        id: '',
        fileName: '',
        type: '',
        titleTable: [
          {
            en: '',
            zh: ''
          }
        ],
        optionsTable: []
      }
    }
  },
  mounted() {
    let index = localStorage.getItem('qaIdIndex')
    this.model.id = index ? Capital[+index] : Capital[0]
  },
  methods: {
    choose() {
      let map = {
        'one-choice-pill': oneChoicePill,
        'multi-choice': multiChoice,
        'one-button-choice': oneButtonChoice,
        'multi-question': multiQuestion
      }
      this.demoImageSrc = map[this.model.type]
    },
    submit() {
      console.log(this.model)
      let index = Capital.findIndex((c) => c == this.model.id)
      localStorage.setItem('qaIdIndex', ++index)
      let model = {
        id: this.model.id,
        type: this.model.type,
        title: {
          zh: this.model.titleTable[0].zh,
          en: this.model.titleTable[0].en
        },
        answer: this.model.optionsTable.map((c) => {
          return {
            id: c.id,
            reverse: c.reverse ? '1' : '0',
            title: {
              en: c.en,
              zh: c.zh
            }
          }
        })
      }
      this.funDownload(
        'export default ' + JSON.stringify(model),
        this.model.fileName + '_' + this.model.id + '.js'
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
      setTimeout(() => {
        location.reload()
      }, 1 * 1000)
      // 然后移除
      document.body.removeChild(eleLink)
    }
  }
}
</script>

<style  lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.container {
  margin: auto;
  width: 90%;
  padding: 20px;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  .demo-block {
    position: absolute;
    right: 0px;
    top: 10px;
    width: 400px;
    p {
      font-size: 20px;
      font-weight: bolder;
      color: #333;
    }
    img {
      height: 550px;
      width: 360px;
      object-fit: contain;
    }
  }
}
</style>
