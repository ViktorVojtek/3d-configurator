const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const port = 3000;
const outDir = '../dist/';

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, outDir),
    compress: true,
    open: true,
    port: 3000,
    publicPath: `http://localhost:${port}/`,
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, outDir),
    // publicPath: '../public/',
    filename: '[name].js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
