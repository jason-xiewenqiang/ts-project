const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')

let config = process.env.NODE_ENV === 'development' ? devConfig : prodConfig

module.exports = merge(baseConfig, prodConfig)