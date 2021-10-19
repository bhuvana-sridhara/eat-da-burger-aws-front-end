const createProxyMiddleware = require('http-proxy-middleware');

//app.use('/', proxy('http://internal-3tier-b-m-Internal-LB-1739696943.us-east-1.elb.amazonaws.com'))
const express = require('express');
const app = express();

const PORT = 5000;
const HOST = "localhost";
const API_SERVICE_URL = "http://internal-3tier-b-m-Internal-LB-1739696943.us-east-1.elb.amazonaws.com";

// module.exports = function(app) {
//   app.use(
//     '/',
//     createProxyMiddleware({
//       target: 'http://internal-3tier-b-m-Internal-LB-1739696943.us-east-1.elb.amazonaws.com',
//       //target: 'http://localhost:5000',
//       changeOrigin: true,
//     })
//   );

//   app.listen(5000);
// };

module.exports = function(app) {
  app.use('/', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
  }));

    app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
  });
  };
