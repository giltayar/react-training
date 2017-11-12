const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /.js$/, use: 'babel-loader' }
    ]
  }
}
