const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const merge = require('webpack-merge');
const WebpackNotifierPlugin = require('webpack-notifier');
// const WriteFilePlugin = require('write-file-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    // https://www.npmjs.com/package/webpack-notifier
    new WebpackNotifierPlugin(),
    // https://github.com/gajus/write-file-webpack-plugin
    // new WriteFilePlugin({
    //   useHashIndex: true,
    // }),
    // https://github.com/Va1/browser-sync-webpack-plugin
    new BrowserSyncPlugin(
      // BrowserSync options
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080/',
      },
      {
        reload: false,
      },
    ),
  ],
});
