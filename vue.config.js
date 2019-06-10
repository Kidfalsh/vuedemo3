const path = require('path')
const px2rem = require('postcss-px2rem')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/config.scss')
      ]
    })
}
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            remUnit: 50,
            forcePxComment: '!px',
            keepComment: '!no'
          })
        ]
      }
    }
  },
  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://teacher.wqisland.com',
        changeOrigin: true,
        pathRewrite: { }
      }
    }
  }
}
