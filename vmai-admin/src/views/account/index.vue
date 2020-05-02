<template>
  <div class=" w-full px-10 mt-12">
    <avue-crud :option="tableOption" :data="tableData" v-model="obj" :page.sync="page" @on-load="onLoad">
      <template slot="thumbnail" slot-scope="{ row }">
        <img :src="row.thumbnail" alt="" />
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
      obj: {},
      page: {
        pageSize: 10
      },
      tableOption: {
        border: true,
        addBtn: true,
        delBtn: false,
        editBtn: false,
        header: true,
        menu: false,
        align: 'center',
        column: [
          {
            label: '用户名',
            prop: 'userName'
          },
          {
            label: '账号(手机号)',
            prop: 'mobile'
          },
          {
            label: '权限管理',
            prop: 'auth'
          },
          {
            label: '注册时间',
            prop: 'registerDate',
            width: '260px'
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