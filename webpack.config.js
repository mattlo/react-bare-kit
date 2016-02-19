const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

const appMountId = 'react';

const TARGET = process.env.npm_lifecycle_event;

process.env.BABEL_ENV = TARGET;

const common = {
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App',
      template: './node_modules/html-webpack-template/index.ejs',
      appMountId,
      inject: false
    }),
    new webpack.DefinePlugin({
      appMountId
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: PATHS.app
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?sourceMap',
          'sass?sourceMap'
        ]
      }
    ]
  }
};

if (TARGET === 'build' || !TARGET) {
  module.exports = merge(common, {});
}

if (TARGET === 'start') {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      // Display only errors to reduce the amount of output.
      stats: 'errors-only',
      // Parse host and port from env so this is easy to customize.
      host: process.env.HOST,
      port: process.env.PORT || 3000
    }, plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}