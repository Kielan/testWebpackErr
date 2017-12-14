module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
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
