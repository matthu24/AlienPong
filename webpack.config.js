// webpack.config.js
var path = require('path');

module.exports = {
  entry: "./index.html",
  output: {
      path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
      filename: "bundle.js"
  },
  devtool: 'source-map',
  resolve: {
   extensions: ['.js', '.jsx', '*']
 }

};
