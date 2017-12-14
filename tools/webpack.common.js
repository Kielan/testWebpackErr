module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    modules: [
      "src",
      "sass",
      "public",
      "node_modules",
    ],
    extensions: [".json", ".js"]
  }
}
