module.exports = {
  devServer: {
    port: 8081,
    host: 'localhost',
    open: true,
    // 配置前端跨域-开发环境下使用
    // 参考：https://blog.csdn.net/xuanhaiyang2008/article/details/101541830
    proxy: {
      '/api': {
        target: 'https://ele-interface.herokuapp.com/api/',
        ws: true, // proxy 代理websocket
        // 跨域
        changeOrigin: true,
        // 如果接口中有/api这种通用前缀，就可以把pathRewrite删掉
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
