<template>
  <div class="w-full px-10 pt-10">
    <el-form :inline="true" :model="formInline">
      <el-form-item label="活动区域">
        <el-select v-model="formInline.oneLevel" placeholder="一级菜单">
          <el-option :label="item.label" :value="item.value" v-for="item in oneLevelOptions" :key="item.label"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动区域" class="ml-8">
        <el-select v-model="formInline.twoLevel" placeholder="二级菜单">
          <el-option :label="item.label" :value="item.value" v-for="item in twoLevelOptions" :key="item.label"></el-option>
        </el-select>
      </el-form-item>
      <el-button type="primary" @click="addMenu"> 添加三级菜单</el-button>
    </el-form>
    <el-table :data="tableData" row-key="id" border default-expand-all :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
      <el-table-column prop="twoLevel" label="所属二级菜单"> </el-table-column>
      <el-table-column prop="chTitle" label="中文标题"> </el-table-column>
      <el-table-column prop="enTitle" label="英文标题"> </el-table-column>
      <el-table-column prop="subChTitle" label="副标题中文"></el-table-column>
      <el-table-column prop="subEnTitle" label="副标题英文"></el-table-column>
      <el-table-column prop="sort" label="排序"></el-table-column>
      <el-table-column label="操作" width="200px">
        <template slot-scope="{ row }">
          <el-button size="mini" type="text" v-if="!row.child">添加子菜单</el-button>
          <el-button size="mini" type="text">编辑</el-button>
          <el-button size="mini" type="text">下架</el-button>
        </template>
      </el-table-column>
    </el-table>
    <spa-dialog ref="spaDialog"></spa-dialog>
  </div>
</template>

<script>
import SpaDialog from './spa-dialog'
export default {
  components: {
    SpaDialog
  },
  data() {
    return {
      formInline: {
        oneLevel: '',
        twoLevel: ''
      },

      oneLevelOptions: [
        {
          label: '创始团队',
          value: 1
        }
      ],
      twoLevelOptions: [
        {
          label: '锦江乐园',
          value: 11
        }
      ]
    }
  },
  methods: {
    addMenu() {
      this.$refs.spaDialog
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