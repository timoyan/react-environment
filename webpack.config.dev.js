const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(baseConfig, {
  devtool: "eval",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true, //gzip
    port: 8081,
    historyApiFallback: true,
    open: true,
    progress: true
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: "style-loader" // inject CSS to page
          },
          {
            loader: "css-loader" // translates CSS into CommonJS modules
          },
          {
            loader: "postcss-loader" // Run post css actions
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          },
          {
            loader: "sass-resources-loader",
            options: {
              resources: [
                "./src/base/scss/_variables.scss",
                "./src/base/scss/_extend.scss",
                "./src/base/scss/_base.scss"
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      title: "Development"
    })
  ]
});
