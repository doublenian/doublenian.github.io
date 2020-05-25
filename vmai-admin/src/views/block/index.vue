<template>
  <div class=" w-full px-10 pt-10">
    <el-button type="primary" class=" mb-5" @click="addParentMenu">添加菜单</el-button>
    <el-table :data="tableData" row-key="id" border default-expand-all :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
      <el-table-column prop="name" label="一级菜单"> </el-table-column>
      <el-table-column prop="chTitle" label="中文标题"> </el-table-column>
      <el-table-column prop="enTitle" label="英文标题"> </el-table-column>
      <el-table-column prop="position" label="所在版块"></el-table-column>
      <el-table-column prop="weight" label="排序"></el-table-column>
      <el-table-column label="状态">
        <template slot-scope="{ row }">
          <el-tag :type="row.Meta.state === 1 ? 'success' : 'danger'">{{ row.statusText }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="260px">
        <template slot-scope="{ row }">
          <el-button size="mini" type="text" @click="setUpOrDown(row)">{{ row.Meta.state == 1 ? '下架' : '上架' }}</el-button>
          <template v-if="row.child">
            <el-button size="mini" type="text" @click="deleteMenu(row)">删除</el-button>
            <el-button size="mini" type="text" @click="editChild(row)">编辑</el-button>
            <el-button size="mini" type="text" @click="deleteMenu(row)">删除</el-button>
          </template>
          <template v-else-if="row.children.length === 0">
            <el-button size="mini" type="text" @click="addChild(row)">添加子菜单</el-button>
            <el-button size="mini" type="text" @click="editParent(row)">编辑</el-button>
            <el-button size="mini" type="text" @click="deleteMenu(row)">删除</el-button>
          </template>
          <template v-else>
            <el-button size="mini" type="text" @click="addChild(row)">添加子菜单</el-button>
            <el-button size="mini" type="text" @click="editParent(row)">编辑</el-button>
          </template>
        </template>
      </el-table-column>
    </el-table>
    <block-dialog ref="blockDialog"></block-dialog>
  </div>
</template>

<script>
import BlockDialog from './block-dialog'
import { categoryList, setState } from '@/api'
import Enum from '../enum'
import _ from 'lodash'
export default {
  components: {
    BlockDialog
  },
  data() {
    return {
      dialogKey: 0,
      tableData: []
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      let { result } = await categoryList({
        parent_id: '',
        types: [1, 2],
        states: [1, 5]
      })
      let tableData = []
      result.forEach(async c => {
        if (c.name == 'banner') return
        let children = await categoryList({
          parent_id: c.id,
          states: [1, 5]
        }).then(ret => ret.result)

        let obj = {
          ...c,
          chTitle: c.title.zh,
          enTitle: c.title.en,
          position: Enum.position[c.type],
          statusText: Enum.status[c.Meta.state]
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
                position: '',
                statusText: Enum.status[c.Meta.state],
                child: true
              }
            })
            .sort((a, b) => a.weight - b.weight < 0)
        }

        tableData.push(obj)
      })
      this.tableData = tableData.sort((a, b) => a.weight - b.weight < 0)
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
    editParent(row) {
      console.log('====row====')
      console.log(row)
      this.$refs.blockDialog
        .show(1, {
          type: 'edit',
          data: row
        })
        .then(ret => {
          console.log(ret)
          this.getList()
        })
        .catch(ret => {
          console.log(ret)
        })
    },
    addParentMenu() {
      this.$refs.blockDialog
        .show(1, {
          type: 'add'
        })
        .then(ret => {
          console.log(ret)
          this.getList()
        })
        .catch(ret => {
          console.log(ret)
        })
    },
    addChild(row) {
      this.$refs.blockDialog
        .show(2, {
          type: 'add',
          row: row
        })
        .then(ret => {
          this.getList()
          console.log(ret)
        })
        .catch(ret => {
          console.log(ret)
        })
    },
    editChild(row) {
      console.log('====row====')
      console.log(row)
      this.$refs.blockDialog
        .show(2, {
          type: 'edit',
          data: row
        })
        .then(ret => {
          console.log(ret)
          this.getList()
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