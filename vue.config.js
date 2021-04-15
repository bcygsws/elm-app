module.exports = {
  devServer: {
    port: 8081,
    host: 'localhost',
    open: true,
    // 配置前端跨域-开发环境下使用
    proxy: {
      '/api': {
        target: 'https://ele-interface.herokuapp.com/api/',
        ws: true,
        // 跨域
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
