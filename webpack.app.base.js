/* global require, module, __dirname */

var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;
var CheckerPlugin = require('fork-ts-checker-webpack-plugin');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var sass = new ExtractTextPlugin('styles.[chunkhash].css');

module.exports = {

  context: __dirname,

  entry: 'src/index',

  target: 'web',

  devtool: 'inline-cheap-module-source-map',

  output: {
    filename: 'bundle.[hash].js',
    publicPath: '/',
    path: path.join(__dirname, 'dist')
  },

  node: {
    console: true
  },

  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, 'dist')], {
      root: __dirname,
      verbose: true,
      dry: false
    }),

    new CheckerPlugin({
      workers: CheckerPlugin.TWO_CPUS_FREE
    }),

    new TsConfigPathsPlugin(),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html')
    }),

    new webpack.optimize.ModuleConcatenationPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'tslint-loader',
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: ['awesome-typescript-loader']
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: /node_modules/
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.(png|jpg|gif|jpegs|jpeg|jpg)$/,
        loader: 'file-loader'
      }
    ]
  },

  resolve: {
    extensions: [
      '.ts', '.tsx', '.js', '.jsx'
    ],
    modules: [
      path.join(__dirname, 'src'),
      __dirname,
      path.join(__dirname, 'node_modules')
    ]
  }
};