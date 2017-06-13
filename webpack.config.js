'use strict';

const webpack = require("webpack");
const path = require("path");
const libraryName = "Providers";

module.exports = {
  context: __dirname + "/src",
  entry: {
    ovpProvider: "k-provider/ovp/ovp-provider.js",
    ottProvider: "k-provider/ott/ott-provider.js",
    statsService: "k-provider/ovp/services/stats-service.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: '[name].min.js',
    library: libraryName,
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: "babel-loader"
      }],
      exclude: [/node_modules/]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      enforce: 'pre',
      use: [{loader: 'eslint-loader', options: {rules: {semi: 0}}}]
    }]
  },
  devServer: {
    contentBase: __dirname + "/src"
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  }
};
