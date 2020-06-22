<template>
  <div class=" w-full px-10 mt-12">
    <el-button type="primary" class=" mb-5" @click="addBanner">添加人物</el-button>
    <el-table :data="list" border>
      <el-table-column prop="name" label="名字"></el-table-column>
      <el-table-column prop="title.zh" label="职位"></el-table-column>
      <el-table-column prop="title.en" label="英文职位"></el-table-column>
      <el-table-column prop="content.zh" label="描述"></el-table-column>
      <el-table-column prop="content.en" label="英文描述"></el-table-column>
      <el-table-column label="图片" width="120px">
        <template slot-scope="{ row }">
          <el-image
            class=" w-20 h-20 object-contain"
            :src="row.bg.md + '?x-oss-process=image/resize,w_100'"
            fit="contain"
            :preview-src-list="[row.bg.md]"
          >
          </el-image>
          <!-- <img :src="row.bg.md" alt="" class=" w-20 h-20 object-contain" /> -->
        </template>
      </el-table-column>
      <el-table-column prop="weight" label="权重"> </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="{ row }">
          <el-tag :type="row.Meta.state === 1 ? 'success' : 'danger'">{{ row.statusText }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="160px">
        <template slot-scope="{ row }">
          <!-- <el-button size="mini" type="text" @click="edit(row)">编辑</el-button> -->
          <el-button size="mini" type="text" @click="setUpOrDown(row)">{{ row.Meta.state == 1 ? '下架' : '上架' }}</el-button>
          <el-button size="mini" type="text" @click="editMenu(row)">编辑</el-button>
          <el-button size="mini" type="text" @click="deleteMenu(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <confirm-dialog ref="confirmDialog"></confirm-dialog>
  </div>
</template>

<script>
import ConfirmDialog from './confirm-dialog'
import { categoryList, setState } from '@/api'
import Enum from '../enum'

export default {
  components: {
    ConfirmDialog
  },
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    addBanner() {
      this.$refs.confirmDialog
        .show()
        .then(ret => {
          this.getList()
        })
        .catch(ret => {})
    },
    editMenu(row) {
      this.$refs.confirmDialog
        .show(row, 'edit')
        .then(ret => {
          this.getList()
        })
        .catch(ret => {})
    },
    async getList() {
      let { result } = await categoryList({
        types: [3],
        parent_id: '',
        states: [1, 5]
      })
      this.list = result.map(c => {
        return {
          ...c,
          statusText: Enum.status[c.Meta.state]
        }
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
    }
  }
}
</script>