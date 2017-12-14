var path = require('path');
var deepmerge = require('deepmerge');
var webpackCommonConfig = require('./webpack.common');

var entry = {
  'app': ['./src/main.js'],
  'main': ['./sass/main.scss'],
}
var loaders = webpackCommonConfig.module.rules.concat();
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
