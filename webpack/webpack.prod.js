const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const ThreeMinifierPlugin = require("@yushijinhun/three-minifier-webpack");
const threeMinifier = new ThreeMinifierPlugin();

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: '[name].min.js',
  },
  plugins: [
    threeMinifier,
  ],
  resolve: {
    plugins: [threeMinifier.resolver],
  }
});
