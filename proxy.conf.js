const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:8090/home',
    secure: false,
    logLevel: 'debug',
    pathRewrite:{'^/api': ''}

}]

module.exports = PROXY_CONFIG;
