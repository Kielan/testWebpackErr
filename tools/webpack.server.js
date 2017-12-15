var fs = require('fs');
var webpack = require('webpack');
var deepmerge = require('deepmerge');
var webpackCommonConfig = require('./webpack.common');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });
var rules = webpackCommonConfig.module.rules.concat();
module.exports = deepmerge({
  devtool: '',
  entry: [
    './server.babel.js'
  ],
  output: { filename: 'server.js' },
  target: 'node',
  module: {
    rules: rules
  },
  plugins: [
/*    new webpack.BannerPlugin(sourceMapSupportModule, {
      raw: true,
      entryOnly: true
    }), */
//    new webpack.NoErrorsPlugin(),
//    new webpack.DefinePlugin({__CLIENT__: false, __SERVER__: true, __PRODUCTION__: false, __DEV__: true, "process.env.NODE_ENV": '"'+process.env.NODE_ENV+'"', "process.env.API_MODE": '"'+process.env.API_MODE+'"'}),
//    new webpack.IgnorePlugin(/vertx/)
  ],
  externals: nodeModules
}, webpackCommonConfig);
