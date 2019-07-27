// cumstom webpack�� �߰��ϱ� ���ؼ� vue.config.js ������ ����� �̰����ٰ� plugin������ �ϸ�ȴ�.
const webpack = require('webpack')

module.exports = {
  configureWebpack: (config) => {
    // ����ȯ��
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
      // �ȯ���϶�
    } else {
      // ��Ÿȯ�� (ex: ����,�׽�Ʈ..)
    }
  },
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
  devServer: {
    port: 8080
  }
}