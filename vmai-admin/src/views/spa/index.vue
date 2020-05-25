<template>
  <div class="w-full px-10 pt-10">
    <el-form>
      <!-- <el-form-item label="活动区域">
        <el-select v-model="formInline.oneLevel" placeholder="一级菜单" @change="selectLevel(formInline.oneLevel)">
          <el-option :label="item.label" :value="item.value" v-for="item in oneLevelOptions" :key="item.label"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动区域" class="ml-8">
        <el-select v-model="formInline.twoLevel" placeholder="二级菜单">
          <el-option :label="item.label" :value="item.value" v-for="item in twoLevelOptions" :key="item.label"></el-option>
        </el-select>
      </el-form-item> -->
      <el-button type="primary" @click="addMenu" class=" float-right"> 添加三级菜单</el-button>
    </el-form>
    <el-table :data="list" row-key="id" border default-expand-all :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
      <el-table-column prop="name" label="模块名称"> </el-table-column>
      <el-table-column prop="parent" label="父菜单"> </el-table-column>
      <el-table-column label="图片">
        <template slot-scope="{ row }" v-if="row.bg.md">
          <el-image class=" w-20 h-20 object-contain" :src="row.bg.md" :preview-src-list="[row.bg.md]"> </el-image>
        </template>
      </el-table-column>
      <el-table-column prop="chTitle" label="中文标题"> </el-table-column>
      <el-table-column prop="enTitle" label="英文标题"> </el-table-column>
      <el-table-column prop="subChTitle" label="副标题中文"></el-table-column>
      <el-table-column prop="subEnTitle" label="副标题英文"></el-table-column>
      <el-table-column label="状态">
        <template slot-scope="{ row }">
          <el-tag :type="row.Meta.state === 1 ? 'success' : 'danger'">{{ row.statusText }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="weight" label="排序"></el-table-column>
      <el-table-column label="操作" width="200px">
        <template slot-scope="{ row }">
          <el-button size="mini" type="text" @click="setUpOrDown(row)">{{ row.Meta.state == 1 ? '下架' : '上架' }}</el-button>

          <template v-if="row.child">
            <el-button size="mini" type="text" @click="deleteMenu(row)">删除</el-button>
            <el-button size="mini" type="text" @click="editFour(row)">编辑</el-button>
          </template>
          <template v-else-if="row.children.length === 0">
            <el-button size="mini" type="text" @click="editThree(row)">编辑</el-button>
            <el-button size="mini" type="text" @click="addChild(row)">添加子菜单</el-button>
            <el-button size="mini" type="text" @click="deleteMenu(row)">删除</el-button>
          </template>
          <template v-else>
            <el-button size="mini" type="text" @click="editThree(row)">编辑</el-button>
            <el-button size="mini" type="text" @click="addChild(row)">添加子菜单</el-button>
          </template>
        </template>
      </el-table-column>
    </el-table>
    <three-level-dialog ref="threeLevelDialog"></three-level-dialog>
    <four-level-dialog ref="fourLevelDialog"></four-level-dialog>
  </div>
</template>

<script>
import { categoryList, setState } from '@/api'
import ThreeLevelDialog from './three-level-dialog'
import FourLevelDialog from './four-level-dialog'
import selectMixin from './select-mixin'
import Enum from '../enum'

export default {
  mixins: [selectMixin],
  components: {
    ThreeLevelDialog,
    FourLevelDialog
  },
  data() {
    return {
      formInline: {
        oneLevel: '',
        twoLevel: ''
      },
      oneLevelId: '',
      twoLevelIdsMap: {},
      list: []
    }
  },
  async mounted() {
    // this.oneLevelOptions = await this.getOneLevels()
    this.oneLevelId = await this.getOneLevels()
    await this.getList()
  },
  methods: {
    async getList() {
      let { result } = await categoryList({
        parent_id: this.oneLevelId,
        states: [1]
      })
      //获得一级菜单 ids
      let twoLevels = result
      let twoLevelIds = {}
      twoLevels.forEach(m => {
        twoLevelIds[m.id] = m.name
      })
      //获取二级菜单ids
      this.twoLevelIdsMap = twoLevelIds
      let ids = Object.keys(twoLevelIds)
      let threeLevels = ids.map(c =>
        categoryList({
          parent_id: c,
          states: [1, 5]
        }).then(ret => ret.result)
      )
      let data = await Promise.all(threeLevels)
      let threeLevelData = []
      data.forEach(items => {
        if (items) {
          items.forEach(m => {
            threeLevelData.push(m)
          })
        }
      })
      //获取第四级
      let tableData = []
      threeLevelData.forEach(async c => {
        let children = await categoryList({
          parent_id: c.id,
          states: [1, 5]
        }).then(ret => ret.result)
        let obj = {
          ...c,
          chTitle: c.title.zh,
          enTitle: c.title.en,
          subChTitle: c.content.zh,
          subEnTitle: c.content.en,
          statusText: Enum.status[c.Meta.state],
          parent: twoLevelIds[c.parent_id]
        }
        if (!children) {
          obj.children = []
        } else {
          obj.children = []
          obj.children = children
            .map(d => {
              return {
                ...d,
                chTitle: d.title.zh,
                enTitle: d.title.en,
                subChTitle: d.content.zh,
                subEnTitle: d.content.en,
                statusText: Enum.status[d.Meta.state],
                child: true
              }
            })
            .sort((a, b) => b.weight - a.weight)
        }

        tableData.push(obj)
      })

      this.list = tableData
    },
    addMenu() {
      this.$refs.threeLevelDialog
        .show('这是一段文字', 'add')
        .then(ret => {
          console.log(ret)
        })
        .catch(ret => {
          this.getList()
          console.log(ret)
        })
    },
    setUpOrDown(row) {
      let state = row.Meta.state === 1 ? 5 : 1

      setState(row.id, state).then(ret => {
        this.$message.success(state == 1 ? '上架成功' : '下架成功')
        this.getList()
      })
    },
    deleteMenu(row) {
      setState(row.id, 2).then(ret => {
        this.$message.success('删除成功')
        this.getList()
      })
    },
    addChild(row) {
      this.$refs.fourLevelDialog
        .show(
          {
            parent_id: row.id
          },
          'add'
        )
        .then(ret => {
          this.getList()
          console.log(ret)
        })
        .catch(ret => {
          console.log(ret)
        })
    },
    editThree(row) {
      console.log('====edit Three==')
      this.$refs.threeLevelDialog
        .show(row, 'edit')
        .then(ret => {
          console.log(ret)
          this.getList()
        })
        .catch(ret => {
          console.log(ret)
        })
    },
    editFour(row) {
      console.log('===edit Four====')
      this.$refs.fourLevelDialog
        .show(
          {
            parent_id: row.id,
            row: row
          },
          'edit'
        )
        .then(ret => {
          this.getList()
          console.log(ret)
        })
        .catch(ret => {
          console.log(ret)
        })
    }
  }
}
</script>

<style>
</style>