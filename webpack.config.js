const path = require('path');
const packages = require('./package');

module.exports = {
  entry: {
    app: './app/index.js',
    vendor: Object.keys(packages.dependencies)
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
};