const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    host: 'localhost',  // 設置主機地址
    port: 8088         // 設置默認埠號

  }
})
