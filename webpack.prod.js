const common = require('./webpack.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader'},
            {loader: 'postcss-loader'},
            {loader: 'sass-loader'},
            {loader: 'import-glob-loader'}
          ]
        })
      }
    ]
  },
  plugins: [
    // https://github.com/webpack-contrib/uglifyjs-webpack-plugin
    new UglifyJSPlugin({
      extractComments: true
    })
  ]
});
