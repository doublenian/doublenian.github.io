const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      primary: '#CD9528',
      brighter: '#FDB732',
      'black-333': '#333333',
      'gray-999': '#999999',
      'gray-666': '#666666',
      'gray-f8f8': '#F8F8F8',
      'gray-e7': '#E7E7E7',
      'gray-f7': '#F7F7F7'
    },
    extend: {
      fontSize: {
        'font-12': '12px',
        'font-14': '14px',
        'font-16': '16px',
        'font-18': '18px',
        'font-20': '20px',
        'font-22': '22px',
        'font-24': '24px',
        'font-26': '26px',
        'font-30': '30px',
        'font-32': '32px'
      }
    }
  },
  variants: {},
  corePlugins: {
    gap: false,
    gridAutoFlow: false,
    gridColumn: false,
    gridColumnStart: false,
    gridColumnEnd: false,
    gridRow: false,
    gridRowStart: false,
    gridRowEnd: false,
    gridTemplateColumns: false,
    gridTemplateRows: false,
    placeholderColor: false,
    placeholderOpacity: false,
    resize: false
  }
}
