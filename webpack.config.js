// webpack.config.js
var path = require('path');

module.exports = {
  entry: "./pong.js",
  output: {
      path: __dirname,
      filename: "bundle.js"
  },
  devtool: 'source-map',
  resolve: {
   extensions: ['.js', '.jsx', '*']
 },
 module: {
      loaders: [
    {
      test: [/\.jsx?$/],
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }
  ]
    }

};
