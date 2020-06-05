const path = require('path')

function resolve(dir) {
  return path.join(__dirname, './', dir)
}
module.exports = {
  publicPath: '/',
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
