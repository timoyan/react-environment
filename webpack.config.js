const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8081,
    historyApiFallback: true,
    open: true
  },
  target: "web",
  module: {
    rules: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
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
            loader: "postcss-loader", // Run post css actions
            options: {
              plugins: function() {
                // post css plugins, can be exported to postcss.config.js
                return [require("precss"), require("autoprefixer")];
              }
            }
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(path.resolve(__dirname, "dist")),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      title: "Custom template"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".scss"]
  }
};
