export default {
  id: 'B',
  type: 'one-choice-pill',
  title: {
    zh: '您的症状持续多久了？',
    en: 'How long have you been experiencing these symptoms?'
  },
  answer: [
    {
      id: ['B1', 'B2', 'B3', 'B4'],
      title: {
        en: '———'
      }
    },
    {
      id: ['B1', 'B2', 'B3'],
      title: {
        en: 'Any option of 0-4 days, 5-7 days, 8-14 days'
      }
    },

    { id: 'B1', reverse: '0', title: { en: '0-4 days', zh: '0-4天' } },
    { id: 'B2', reverse: '0', title: { en: '5-7 days', zh: '5-7天' } },
    { id: 'B3', reverse: '0', title: { en: '8-14 days', zh: '8-14天' } },
    { id: 'B4', reverse: '0', title: { en: '>14days', zh: '大于14天' } }
  ]
}
