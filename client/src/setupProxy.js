const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://internal-3tier-b-m-Internal-LB-1739696943.us-east-1.elb.amazonaws.com',
      //target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};