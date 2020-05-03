<template>
  <div class=" w-full px-10 pt-10">
    <el-button type="primary" class=" mb-5" @click="addParentMenu">添加一级菜单</el-button>
    <el-table :data="tableData" row-key="id" border default-expand-all :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
      <el-table-column prop="blockName" label="一级菜单"> </el-table-column>
      <el-table-column prop="chTitle" label="中文标题"> </el-table-column>
      <el-table-column prop="enTitle" label="英文标题"> </el-table-column>
      <el-table-column prop="position" label="所在版块"></el-table-column>
      <el-table-column prop="sort" label="排序"></el-table-column>
      <el-table-column label="状态">
        <template slot-scope="{ row }">
          <el-tag type="success">{{ row.statusText }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="260px">
        <template slot-scope="{ row }">
          <el-button size="mini" type="text" v-if="!row.child">添加子菜单</el-button>
          <el-button size="mini" type="text">编辑</el-button>
          <el-button size="mini" type="text">下架</el-button>
          <template v-if="row.child">
            <el-button size="mini" type="text">删除</el-button>
          </template>
          <template v-else-if="row.children.length === 0">
            <el-button size="mini" type="text">删除</el-button>
          </template>
          <template v-else></template>
        </template>
      </el-table-column>
    </el-table>
    <block-dialog ref="blockDialog"></block-dialog>
  </div>
</template>

<script>
import BlockDialog from './block-dialog'
export default {
  components: {
    BlockDialog
  },
  data() {
    return {
      tableData: [
        {
          id: 3,
          blockName: '作品案例',
          chTitle: '作品案例',
          enTitle: 'ourWorks',
          position: '导航栏',
          sort: 1,
          statusText: '上架',
          children: [
            {
              id: 31,
              blockName: '东方明珠',
              chTitle: '东方明珠',
              enTitle: 'east tower',
              position: '',
              sort: 1,
              child: true,
              statusText: '上架'
            },
            {
              id: 32,
              blockName: '红房子',
              chTitle: '红房子',
              enTitle: 'red house',
              position: '',
              sort: 2,
              child: true,
              statusText: '上架'
            }
          ]
        }
      ]
    }
  },
  methods: {
    addParentMenu() {
      this.$refs.blockDialog
        .show('这是一段文字', 'add')
        .then(ret => {
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