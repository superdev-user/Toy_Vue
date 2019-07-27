// cumstom webpack을 추가하기 위해선 vue.config.js 파일을 만들고 이곳에다가 plugin설정을 하면된다.
const webpack = require('webpack')

module.exports = {
  configureWebpack: (config) => {
    // 공통환경
    config.plugins = [
      ...config.plugins,
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery',
        moment: 'moment'
      })
    ]
    if (config.mode === 'production') {
      // 운영환경일때
    } else {
      // 기타환경 (ex: 개발,테스트..)
    }
  },
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
  devServer: {
    port: 8080
  }
}