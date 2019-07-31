const path = require('path');
const config = require('./webpack.dev.js');
const baseConfig = require('./webpack.base.js');
const isMinify = process.argv.indexOf('-p') !== -1;

delete config.serve;

module.exports = Object.assign(baseConfig, {
  mode: 'production',
  entry: {
    yus: './es/index.js'
  },
  output: {
    path: path.join(__dirname, '../lib'),
    library: 'yus',
    libraryTarget: 'umd',
    filename: isMinify ? '[name].min.js' : '[name].js',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  performance: false,
  optimization: {
    minimize: isMinify
  }
});
