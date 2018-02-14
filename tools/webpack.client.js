var Promise = require("bluebird");
// Configure
/*
this is how it is said to do in docs but gets invalid left hand assignment
Promise.config({
    longStackTraces: true,
    warnings: true // note, run node with --trace-warnings to see full stack traces for warnings
}) = require('@babel/runtime/core-js/promise').default;
*/
/*
Promise.config = {
    longStackTraces: true,
    warnings: true // note, run node with --trace-warnings to see full stack traces for warnings
}
*/
//where do I put this var in the bootstrap step of entry, it's very vauge. Must I create a new file?
//var babelPromiseOverride = require('@babel/runtime/core-js/promise')
//also try
//var readableObj = require('@babel/runtime/core-js/promise').default = Promise;//require('bluebird');

var path = require('path');
var webpackMerge = require('webpack-merge');
var webpackCommonConfig = require('./webpack.common');
//'@babel/polyfill', './src/main.js'
//here polygill is set, but needs to be overridden
var envEntry = require('./entry');

var entry = {
  'app': envEntry,
  'main': ['./sass/main.scss'],
}
//    ["module:@babel/helper-module-imports"],

//do I create a plugins arr and use this package? It doesn't work either
/*
var pluginArr = [
  new webpack.ProvidePlugin({
    Promise: "imports-loader?this=>global!exports-loader?global.Promise!bluebird",
  })
]
*/
var loaders = webpackCommonConfig.module.rules.concat();
const WebpackRecipe = webpackMerge({
  cache: false,
  devtool: '',
  entry: entry,
  module: {
    loaders: loaders
  },
  output: {
    path: path.join(process.cwd(), 'public'),
    publicPath: '/',
    chunkFilename: 'js/[name].js',
    filename: 'js/[name].js',
  },
  plugins: [],
}, webpackCommonConfig);
module.exports = WebpackRecipe;
