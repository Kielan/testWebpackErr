var path = require('path');
var deepmerge = require('deepmerge');
var webpackCommonConfig = require('./webpack.common');

var entry = {
  'app': ['./src/main.js'],
}
var loaders = webpackCommonConfig.module.loaders.concat();
const WebpackRecipe = deepmerge({
  cache: false,
  devtool: '',
  entry: entry,
  module: {
    loaders: loaders
  },
  output: {
    path: path.join(process.cwd(), 'public'),
    publicPath: '/',//publicPath, //isProduction was just /
    chunkFilename: 'js/[name].js',
    filename: 'js/[name].js',
  },
  plugins: [],
}, webpackCommonConfig);
module.exports = WebpackRecipe;
