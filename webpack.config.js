const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const css = require('style-loader');

module.exports = {
  entry: ["babel-polyfill", "./src/js/index.js"],
  output: {
    path: path.resolve(__dirname, "production"),
    filename: "js/bundle.js"
  },
  devServer: {
    contentBase: "./production"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader", options: { injectType: "linkTag" } },
          { loader: "file-loader" }
        ]
      }
    ]
  }
};