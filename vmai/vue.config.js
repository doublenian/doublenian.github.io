const path = require('path')

function resolve(dir) {
  return path.join(__dirname, './', dir)
}
module.exports = {
  publicPath:
    process.env.VUE_APP_SERVER_ENV === 'test' ? '/portal/adverse-event' : '/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: require.resolve('zepto'),
          use: ['exports-loader?window.Zepto', 'script-loader']
        }
      ]
    }
  }
}
