'use strict'

const baseWebpackConf = require('./webpack.base.conf')
const config = {
  ...baseWebpackConf,
  entry: {
    app: './docs/main.js'
  }
}

config.module.rules.push({
  test: /\.md$/,
  loader: 'vue-markdown-loader'
})

module.exports = config