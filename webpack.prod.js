var path              = require('path');
var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var PATHS = {
  source: path.join(__dirname, 'js'),
  jsout: path.join(__dirname, 'dist'),
  htmlout: path.join(__dirname)
};

module.exports = {
  entry: {
    app: ['babel-polyfill', `${PATHS.source}/index`]
  },
  output: {
    path: PATHS.jsout,
    publicPath: 'dist/',
    filename: '[name].bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.(js|jsx)?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.(png|svg|jpg|gif)$/, use: 'file-loader?name=images/[name].[ext]' },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: 'file-loader?name=fonts/[name].[ext]' }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new HtmlWebpackPlugin({
      title: 'We Brunner',
      template: 'index.ejs',
      filename: `${PATHS.htmlout}/index.html`,
      hash: true
    })
  ]
};
