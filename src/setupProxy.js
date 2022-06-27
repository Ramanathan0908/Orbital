const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        proxy.createProxyMiddleware('/api', {
            target: 'https://us-central1-orbital-246a3.cloudfunctions.net/api',
            changeOrigin: true,
            pathRewrite: {
                "^/api": "",
            },
            headers: {
                Connection: 'keep-alive'
            }
        })
    )
    app.use(
        proxy.createProxyMiddleware('/summarize', {
            target: 'http://localhost:6969/',
            changeOrigin: true,
            pathRewrite: {
                "^/summarizer": "",
            },
            headers: {
                Connection: 'keep-alive'
            }
        })
    )
}