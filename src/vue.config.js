const path = require('path')

module.exports = {
  outputDir: 'docs',
  configureWebpack: {
    resolve: {
      // 别名
      alias: {
        '@': path.resolve(__dirname, './src'),
        assets: path.resolve(__dirname, './src/assets'),
        components: path.resolve(__dirname, './src/components'),
        router: path.resolve(__dirname, './src/router'),
        views: path.resolve(__dirname, './src/views'),
        layout: path.resolve(__dirname, './src/layout'),
        store: path.resolve(__dirname, './src/store'),
        style: path.resolve(__dirname, './src/style'),
        utils: path.resolve(__dirname, './src/utils'),
        manageViews: path.resolve(__dirname, './src/manageViews')
      }
    }
  }
}
