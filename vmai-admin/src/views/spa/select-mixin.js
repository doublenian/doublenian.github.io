import { categoryList } from '@/api'

export default {
  data() {
    return {
      twoLevelOptions: []
    }
  },

  methods: {
    getOneLevels() {
      return categoryList({
        types: [1],
        parent_id: '',
        states: [1, 5]
      }).then(ret => {
        let result = ret.result
        return result.find(c => c.title.zh === '作品案例').id
      })
    },
    selectLevel(parent_id) {
      if (!parent_id) return
      return categoryList({
        parent_id: parent_id,
        states: [1]
      }).then(ret => {
        let { result } = ret
        if (result) {
          this.twoLevelOptions = result.map(c => {
            return {
              label: c.name,
              value: c.id
            }
          })
        } else {
          this.twoLevelOptions = []
        }
      })
    }
  }
}
