// vue.config.js
module.exports = {
    // options...
    baseUrl: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/'
  }