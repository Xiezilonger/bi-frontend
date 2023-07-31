const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8103/api/*',    //要访问的地址
      changeOrigin: true,
    })
  );
  // 可以代理多个
  // app.use(
  //     '/api',
  //     createProxyMiddleware({
  //         target: 'https://i.maoyan.com',
  //         changeOrigin: true,
  //     })
  // );
};

