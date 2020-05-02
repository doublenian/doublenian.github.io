<template>
  <div class=" w-full px-10 mt-12">
    <avue-crud :option="tableOption" :data="list" v-model="obj" :page.sync="page" @on-load="onLoad"> </avue-crud>
  </div>
</template>

<script>
import { getConsultList } from '@/api'
export default {
  data() {
    return {
      list: [],
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
            prop: 'submitDate',
            type: 'date',
            format: 'YYYY-MM-DD HH:mm:ss'
          }
        ]
      }
    }
  },
  methods: {
    onLoad(page) {
      getConsultList({
        page: page.currentPage,
        size: this.page.pageSize
      }).then(ret => {
        this.page.total = ret.total
        this.list = ret.consults.map(c => {
          return {
            ...c,
            submitDate: c.Meta.create_at * 1000
          }
        })
      })
    }
  }
}
</script>