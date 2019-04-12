const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LessLists = require('less-plugin-lists');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: path.join(__dirname, 'src', 'app.js')
  },

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },

  devServer: {
    port: process.env.PORT || 3000,
    contentBase: path.join(process.cwd(), './public'),
    historyApiFallback: true,
    watchContentBase: true,
    stats: 'none',
    quiet: false,
    open: true
  },

  module: {
    rules: [
      {
        test: /\.((png)|(jpg)|(jpeg)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=/[hash].[ext]'
      },
      {
        loader: 'babel-loader',
        test: /\.js?$/,
        exclude: /node_modules/
      },
      {
        test: /\.(le|c)ss$/, // For what files are the loaders
        exclude: /node_modules/,
        use: [
          {
            // What Loaders to use from bottom to top
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: MiniCssExtractPlugin.loader // Extracts CSS into separate files. It creates a CSS file per JS file which contains CSS
          },
          {
            loader: 'css-loader' // Second, translates CSS into CommonJS
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader',
            options: {
              plugins: [new LessLists()],
              strictMath: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CopyWebpackPlugin([
      {
        from: './src/fonts/',
        to: 'fonts/',
        flatten: true
      },
      {
        from: './src/images/',
        to: 'images/',
        flatten: true
      }
    ]),
    // Add jQuery
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  devtool: 'cheap-module-eval-source-map'
};
