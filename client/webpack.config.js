const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const clientPath = path.resolve(__dirname);

module.exports = {
  entry: {
    main: path.resolve(clientPath, 'index.js')
  },
  output: {
    publicPath: './',
    path: path.resolve(clientPath, 'dist'),
    filename: 'src/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(css|styl)$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      }
    ]
  },
  resolve: {
    alias: {
      '@':clientPath,
      '@assets': path.resolve(clientPath, 'assets'),
      '@images': path.resolve(clientPath, 'assets/images'),
      '@components': path.resolve(clientPath, 'src/components'),
      '@common': path.resolve(clientPath, 'src/common')
    }
  },
  devServer: {
    contentBase: path.resolve(clientPath, 'dist'),
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 7000,
    inline: true,
    hot: true,
    compress: true,
    overlay:{
      errors:true,
      warnings:false
    },
    open: true,
    disableHostCheck: true,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:7001",
        changeOrigin: true
      }
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(clientPath, 'index.html'),
      filename: 'index.html',
      favicon: path.resolve(clientPath, 'assets/images/forum.png')// 页面title前的图标
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}