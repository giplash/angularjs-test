const webpack = require('webpack');

const config = {};
config.entry = {
  app: './src/app/app.js'
};
config.output = {
  path: __dirname + '/dist',
  publicPath: '/',
  filename: '[name].bundle.js',
  chunkFilename: '[name].bundle.js'
};
config.devtool = 'eval-source-map';
config.module = {
  rules: [{
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
  }, {
    test: /\.css$/,
    loader: 'css-loader',
  }, {
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
    loader: 'file-loader'
  }, {
    test: /\.html$/,
    loader: 'raw-loader'
  }]
};

config.devServer = {
  contentBase: '/dist',
  stats: 'minimal',
  host: '0.0.0.0'
};

module.exports = config;
