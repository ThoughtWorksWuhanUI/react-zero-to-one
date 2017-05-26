const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './app/index.js',
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader' },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader",
          options: { modules: true, localIdentName: '[path][name]__[local]--[hash:base64:5]' }
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({ template: './app/index.html' })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    host: "0.0.0.0",
    port: 9000,
    hot: true
  }
};

module.exports = config;
