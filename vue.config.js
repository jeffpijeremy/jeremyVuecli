// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   //transpileDependencies: true,
//   devServer: {
//     //headers: { "Access-Control-Allow-Origin": "*" },
//     proxy:'https://data.gov.tw/'
//   }
// })
module.exports ={
  devServer: {
    proxy: 'https://data.gov.tw/'
  }
}