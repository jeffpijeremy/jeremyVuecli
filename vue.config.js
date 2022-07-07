const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    host: 'localhost',  // 設置主機地址
    port: 8088         // 設置默認埠號
    //以上的ip和埠號是我們本機的;下面為需要跨域的
    // proxy: {    //配置跨域
    //   '/api': {
    //     target: 'https://quality.data.gov.tw/dq_download_json.php?nid=155901&md5_url=e0627b35294d844b5eb8d1fe093678f6',   //這裡後台的地址模擬的，應該填寫真實的後台api
    //     ws: true,     // 如果要代理 websockets
    //     changOrigin: true,  //允許跨域
    //     pathRewrite: {
    //       '^/api': '' //請求的時候使用這個api就可以
    //     }
    //   }

  }
})
