<template>
  <div class=" w-full px-10 mt-12">
    <avue-crud @row-save="rowSave" @row-del="rowDel" :option="tableOption" :data="list" v-model="obj" :page.sync="page" @on-load="onLoad">
    </avue-crud>
  </div>
</template>

<script>
import { getUserList, createUser } from '@/api'
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
        delBtn: true,
        editBtn: false,
        header: true,
        menu: true,
        align: 'center',
        column: [
          {
            label: '用户名',
            prop: 'name',
            rules: [
              {
                required: true,
                message: '请输入用户名',
                trigger: 'blur'
              }
            ]
          },
          {
            label: '密码',
            prop: 'password',
            type: 'password',
            autocomplete: 'off',
            rules: [
              {
                required: true,
                message: '请输入密码',
                trigger: 'blur'
              }
            ],
            hide: true
          },
          {
            label: '账号(手机号)',
            prop: 'mobile',
            autocomplete: 'off',
            rules: [
              {
                required: true,
                message: '请输入账号(手机号)',
                trigger: 'blur'
              }
            ]
          },

          {
            label: '注册时间',
            prop: 'createAt',
            width: '260px',
            type: 'date',
            format: 'YYYY-MM-DD HH:mm:ss',
            display: false
          },
          {
            label: '权限管理',
            prop: 'authName',
            display: false
          }
        ]
      }
    }
  },
  methods: {
    onLoad(page) {
      console.log(page)
      getUserList({
        page: page.currentPage,
        size: this.page.pageSize
      }).then(ret => {
        this.page.total = ret.total
        this.list = ret.user_list.map(c => {
          return {
            ...c,
            authName: c.role === 65535 ? '系统管理员' : '普通管理员',
            createAt: c.Meta.create_at * 1000
          }
        })
      })
    },
    rowSave(form, done, loading) {
      createUser({
        name: form.name,
        password: form.password,
        mobile: form.mobile
      }).then(ret => {
        this.page.currentPage = 1
        this.onLoad(this.page)
        this.$message.success('添加普通用户成功')
        done()
      })
    },
    rowDel() {
      this.$message.error('删除用户有待实现')
    }
  }
}
</script>

<style>
.avue-empty__image {
  display: flex;
  justify-content: center;
}
</style>