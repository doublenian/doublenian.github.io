<template>
  <div class=" w-full px-10 mt-12">
    <avue-crud :option="tableOption" :data="tableData" v-model="obj" :page.sync="page" @on-load="onLoad">
      <template slot-scope="{ type, size }" slot="menu">
        <el-button :size="size" :type="type">新增子模块</el-button>
      </template>
    </avue-crud>
  </div>
</template>

<script>
import tableData from './tableData'
export default {
  data() {
    return {
      tableData,
      page: {
        pageSize: 10
      },
      tableOption: {
        addBtnText: '新增模块',
        addBtn: true,
        delBtn: true,
        editBtn: true,
        header: true,
        menuWidth: 260,
        border: true,
        align: 'center',
        column: [
          {
            label: '模块名字',
            prop: 'moduleName'
          },
          {
            label: '中文标题',
            prop: 'nameCn'
          },
          {
            label: '英文标题',
            prop: 'nameEn'
          },
          {
            label: '所在版块',
            prop: 'section'
          },
          {
            label: '是否置顶',
            prop: 'isTop'
          },
          {
            label: '呈现模式',
            prop: 'mode'
          },
          {
            label: '排序',
            prop: 'sort'
          },
          {
            label: '父模块',
            prop: 'parentBlock'
          }
        ]
      }
    }
  },
  methods: {
    onLoad(page) {
      console.log(page)
      this.page.total = 200
      console.log(this.page.currentPage)
    }
  }
}
</script>