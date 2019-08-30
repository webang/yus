/**
 * @documention 生成内联的字体文件，避免引入时 url 错误
 */
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  stats: {
    modules: false,
    children: false
  },
  entry: {
    app: path.resolve(__dirname, '../packages/font/dist/style.less')
  },
  output: {
    path: path.resolve(__dirname, '../packages/font/')
  },
  resolve: {
    extensions: ['.js', '.vue', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(less|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.less'
    }),
    new ProgressBarPlugin()
  ]
};
