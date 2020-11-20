const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlTemplate = require('./template');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        // vendor chunk
        vendor: {
            // sync + async chunks
            chunks: 'all',
            name: 'vendors',
            // import file path containing node_modules
            test: /node_modules/
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, '../src/assets'), to: path.resolve(__dirname, '../dist/assets') },
      ],
      options: {
        concurrency: 100,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Configurator',
      inject: false,
      templateContent: ({ htmlWebpackPlugin }) => htmlTemplate(htmlWebpackPlugin)
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  },
};
