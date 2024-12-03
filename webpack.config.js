const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: "development", // 또는 'production'
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, 
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], 
      },
      {
        test: /\.html$/i,
        loader: "html-loader", 
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource", 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", 
      filename: "index.html", 
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), 
    },
    compress: true, 
    port: 9000, 
    open: true,
  },
};