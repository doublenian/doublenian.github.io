<template>
  <div class=" w-full px-10 mt-12">
    <el-button type="primary" class=" mb-5" @click="addBanner">添加轮播</el-button>
    <el-table :data="list" border>
      <el-table-column label="图片" width="120px">
        <template slot-scope="{ row }">
          <el-image class=" w-20 h-20 object-contain" :src="row.bg.md" :preview-src-list="[row.bg.md]"> </el-image>
          <!-- <img :src="row.bg.md" alt="" class=" w-20 h-20 object-contain" /> -->
        </template>
      </el-table-column>
      <el-table-column prop="titleZh" label="标题"> </el-table-column>
      <el-table-column prop="contentZh" label="副标题"> </el-table-column>
      <el-table-column label="超链" width="240px">
        <template slot-scope="{ row }">
          <el-link type="primary" :href="row.link.herf" target="_blank">{{ row.link.herf }}</el-link>
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
          <el-button size="mini" type="text" @click="edit(row)">编辑</el-button>
          <el-button size="mini" type="text" @click="setUpOrDown(row)">{{ row.Meta.state == 1 ? '下架' : '上架' }}</el-button>
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
    async getList() {
      let { result } = await categoryList({
        parent_id: '',
        types: [4],
        states: [1, 5]
      })
      this.list = result.map(c => {
        return {
          ...c,
          titleZh: c.title.zh,
          contentZh: c.content.zh,
          statusText: Enum.status[c.Meta.state]
        }
      })
    },
    edit(row) {
      this.$refs.confirmDialog
        .show(row, 'edit')
        .then(ret => {
          this.getList()
        })
        .catch(ret => {})
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