var path    = require('path');
var webpack = require('webpack');

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
  devtool: 'eval',
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
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    port: 9000,
    hot: true,
    proxy: {
      '/api/v1': 'http://localhost:8080'
    },
    publicPath: 'http://localhost:9000/dist/'
  },
};
