// 引入以下2个库
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
    devServer: {
        disableHostCheck: true
    },
    // 增加以下配置
    configureWebpack: {
      plugins: [
        ComponentsPlugin({
          resolvers: [VantResolver()],
        }),
      ],
    },
    // 增加less配置
    css: {
        loaderOptions: {
          less: {
            lessOptions: {
              // 在这里添加自定义的Less配置
            },
          },
        },
      },
}