/* global require, module */

var webpackConfig = require('./webpack.app.base.js');
var webpack = require('webpack');

var path = require('path');

var { CheckerPlugin } = require('awesome-typescript-loader')

var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

webpackConfig.devServer = {
  historyApiFallback: true
};

webpackConfig.plugins.push(
  new webpack.DefinePlugin({
    __ENV__: '"dev"',
  }),

  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: 'app.html',
    openAnalyzer: false
  }),
  new webpack.NamedModulesPlugin(),
  new CheckerPlugin()
);
webpackConfig.devtool = 'inline-cheap-module-source-map';
module.exports = webpackConfig;
