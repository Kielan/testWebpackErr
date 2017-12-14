const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(ico|gif|png|jpg|jpeg|svg|webp)$/,
        use: [{loader: "file?context=public&name=/[path][name].[ext]"}],
        exclude: /node_modules/
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: [{loader: "url-loader?limit=10000&mimetype=application/font-woff&name=./fonts/[hash].[ext]"}],
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: [{loader: "url-loader?limit=10000&mimetype=application/font-woff&name=./fonts/[hash].[ext]"}],
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: "url?limit=10000&mimetype=application/octet-stream&name=./fonts/[hash].[ext]"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: "file&name=./fonts/[hash].[ext]"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: "url?limit=10000&mimetype=image/svg+xml&name=./fonts/[hash].[ext]"
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ],
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
