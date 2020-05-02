<template>
  <div class=" w-full px-10 mt-12">
    <avue-crud :option="tableOption" :data="tableData" v-model="obj" :page.sync="page" @on-load="onLoad"> </avue-crud>
  </div>
</template>

<script>
import tableData from './tableData'
export default {
  data() {
    return {
      tableData,
      obj: {},
      page: {
        pageSize: 10
      },
      tableOption: {
        border: true,
        addBtn: true,
        delBtn: false,
        editBtn: false,
        header: false,
        menu: false,
        align: 'center',
        column: [
          {
            label: '姓名',
            prop: 'name'
          },
          {
            label: '手机',
            prop: 'mobile'
          },
          {
            label: '咨询内容',
            prop: 'content'
          },
          {
            label: '提交时间',
            prop: 'submitDate'
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