const path = require('path');
const glob = require('glob');
const packages = require('./package');

module.exports = {
  entry: {
    app: glob.sync("./app/**/*.js"),
    vendor: Object.keys(packages.dependencies)
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
        test: /\.html$/,
        loader: 'raw-loader'
      },{
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },{
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },{
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      }]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
};