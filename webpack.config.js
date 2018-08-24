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
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
};