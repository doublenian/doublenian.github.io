export default {
  id: 'M',
  type: 'multi-choice',
  title: {
    zh: '你有以下症状吗?(点击以下症状)',
    en: 'Do you have any of the following symptoms?(click all that apply)'
  },
  answer: [
    {
      id: 'M1',
      reverse: '0',
      title: { en: 'Fever over 37.5℃', zh: '发烧超37.5℃' }
    },
    { id: 'M2', reverse: '0', title: { en: 'Sore throat', zh: '咽喉痛' } },
    {
      id: 'M3',
      reverse: '0',
      title: { en: 'Loss of taste/smell', zh: '味觉和嗅觉丧失' }
    },
    { id: 'M4', reverse: '0', title: { en: 'Diarrhoea', zh: '腹泻' } },
    { id: 'M5', reverse: '0', title: { en: 'Runny nose', zh: '流鼻涕' } },
    { id: 'M6', reverse: '0', title: { en: 'Body ache', zh: '身体疼痛' } },
    { id: 'M7', reverse: '1', title: { en: 'No symptoms', zh: '不名症状' } }
  ]
}
