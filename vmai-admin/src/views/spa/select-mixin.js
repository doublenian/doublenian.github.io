import { categoryList } from '@/api'

export default {
  data() {
    return {
      oneLevelOptions: [],
      twoLevelOptions: []
    }
  },

  methods: {
    async getOneLevels() {
      let { result } = await categoryList({
        parent_id: '',
        states: [1, 5]
      })
      return result
        .map(c => {
          return {
            label: c.name,
            value: c.id
          }
        })
        .filter(c => c.label !== 'banner')
    },
    selectLevel(parent_id) {
      if (!parent_id) return
      categoryList({
        parent_id: parent_id,
        states: [1, 5]
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
