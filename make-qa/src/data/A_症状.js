export default {
  id: 'A',
  type: 'multi-choice',
  title: {
    zh: '您是否有以下症状？ （选择任何符合条件的症状）',
    en:
      'Are you experiencing any of the following symptoms? (Select all that apply)'
  },
  answer: [
    {
      id: 'A1',
      reverse: '0',
      title: { en: 'Fever over 37.5℃', zh: '发热超过37.5℃' }
    },
    { id: 'A2', reverse: '0', title: { en: 'Cough', zh: '咳嗽' } },
    {
      id: 'A3',
      reverse: '0',
      title: { en: 'Difficulty Breathing', zh: '呼吸困难' }
    },
    { id: 'A4', reverse: '0', title: { en: 'Diarrhoea', zh: '腹泻' } },
    { id: 'A5', reverse: '0', title: { en: 'Sore Throat', zh: '咽喉疼痛' } },
    {
      id: 'A6',
      reverse: '0',
      title: { en: 'Loss of Taste/Smell', zh: '味觉/嗅觉缺失' }
    },
    { id: 'A7', reverse: '0', title: { en: 'Body Ache', zh: '身体疼痛' } },
    { id: 'A8', reverse: '0', title: { en: 'Runny Nose', zh: '流涕' } },
    { id: 'A9', reverse: '1', title: { en: 'No Symptoms', zh: '无以上症状' } }
  ]
}
