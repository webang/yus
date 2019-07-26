const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: {
    'f6-docs': './docs/docs/main.js',
    'f6-mobile': './docs/mobile/main.js',
    'f6-theme': './docs/theme/main.js'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    chunkFilename: 'async_[name].js'
  },
  stats: {
    modules: false,
    children: false
  },
  devServer: {
    open: true,
    inline: true,
    hot: true,
    host: '0.0.0.0',
    stats: 'errors-only',
    clientLogLevel: 'warning',
    before(app) {
      /**
       * 获取主题详情
       */
      app.get('/theme/:themeId', (req, res) => {
        res.header('Cache-Control', 'no-store');
        const content = require('./make-theme').getThemeDetails(req.params.themeId);
        res.json(content);
      });

      /**
       * 获取所有主题列表
       */
      app.get('/theme', (req, res) => {
        res.header('Cache-Control', 'no-store');
        res.json(require('./make-theme').getThemeList());
      });

      /**
       * 保存主题
       */
      app.post('/theme/:themeId', (req, res) => {
        res.header('Cache-Control', 'no-store');
        require('./make-theme').saveTheme(req.params.themeId, req.query.content);
        res.json({});
      });
    }
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.vue', '.css']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          }
        ]
      },
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'resolve-url-loader']
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              paths: [path.resolve(__dirname, 'node_modules')]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: path.resolve(__dirname, './dynamic-import-theme'),
            options: {
              matchFile: '// F6-CSS-VARS-SLOT',
              appendVariables: path.resolve(__dirname, './vars.scss')
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader'
          },
          {
            loader: 'vue-markdown-loader/lib/markdown-compiler',
            options: {
              raw: true
            }
          }
        ]
      },
      {
        // test: /\.(ttf|svg)$/,
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['f6-docs'],
      template: 'docs/docs/index.html',
      filename: 'index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      chunks: ['f6-mobile'],
      template: 'docs/mobile/index.html',
      filename: 'mobile.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      chunks: ['f6-theme'],
      template: 'docs/theme/index.html',
      filename: 'theme.html',
      inject: true
    })
  ]
};
