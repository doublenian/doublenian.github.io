module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#273F6B',
        'black-333': '#333333',
        'gray-999': '#999999',
        'gray-666': '#666666',
        'gray-f8f8': '#F8F8F8',
        'gray-e7': '#E7E7E7',
        'gray-f7': '#F7F7F7'
      },
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
      },
      inset: {
        full: '100%'
      },
      opacity: {
        '10': '0.1',
        '90': '0.9'
      }
    },
    transitionProperty: {
      // defaults to these values
      none: 'none',
      all: 'all',
      color: 'color',
      bg: 'background-color',
      border: 'border-color',
      colors: ['color', 'background-color', 'border-color'],
      opacity: 'opacity',
      transform: 'transform'
    },
    transitionDuration: {
      // defaults to these values
      default: '250ms',
      '0': '0ms',
      '100': '100ms',
      '250': '250ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms'
    },
    transitionTimingFunction: {
      // defaults to these values
      default: 'ease',
      linear: 'linear',
      ease: 'ease',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out'
    },
    transitionDelay: {
      // defaults to these values
      default: '0ms',
      '0': '0ms',
      '100': '100ms',
      '250': '250ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms'
    },
    willChange: {
      // defaults to these values
      auto: 'auto',
      scroll: 'scroll-position',
      contents: 'contents',
      opacity: 'opacity',
      transform: 'transform'
    }
  },
  variants: {
    transitionProperty: ['responsive'],
    transitionDuration: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDelay: ['responsive'],
    willChange: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: [],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive', 'group-hover'],
    flexDirection: ['responsive'],
    flexWrap: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    justifyContent: ['responsive'],
    alignContent: ['responsive'],
    flex: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    inset: ['responsive'],
    resize: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    fill: [],
    stroke: [],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    fontSize: ['responsive'],
    fontStyle: ['responsive'],
    textTransform: ['responsive'],
    textDecoration: ['responsive', 'hover', 'focus'],
    fontSmoothing: ['responsive'],
    letterSpacing: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive', 'hover', 'group-hover'],
    whitespace: ['responsive'],
    wordBreak: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive']
  },
  corePlugins: {
    container: false
  },
  plugins: [require('tailwindcss-transitions')()]
}
