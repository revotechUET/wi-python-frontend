const ENV = process.env.NODE_ENV

if (ENV === 'development') module.exports = require('./webpack.dev.config')
else module.exports = require('./webpack.prod.config')