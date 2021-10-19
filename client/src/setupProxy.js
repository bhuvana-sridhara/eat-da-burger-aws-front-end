const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: {
          host: `http://internal-3tier-b-m-Internal-LB-1739696943.us-east-1.elb.amazonaws.com`,
          port: 5000
      }
      //target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};