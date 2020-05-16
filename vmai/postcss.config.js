const IN_PRODUCTION = process.env.NODE_ENV === 'production'
const whitelister = require('purgecss-whitelister')
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('tailwindcss')()
  ]
}
