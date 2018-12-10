const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  entry: resolve("src/components/button/index.js"),
  externals: {
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue"
    }
  },
  output: {
    path: resolve("lib"),
    filename: "pirate.js",
    library: "pirate",
    libraryTarget: "window",
  },
  resolve: {
    extensions: [".js", ".vue"]
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          js: {
            loader: "babel-loader",
            options: {}
          },
          scss: {
            loader: ["css-loader", "scss-loader"]
          },
          extractCSS: true
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [resolve("package")]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("pirate.css"),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};