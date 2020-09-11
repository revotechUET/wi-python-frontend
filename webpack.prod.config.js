const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src'),
  output: {
    filename: 'app.[contenthash].js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(scss|css|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|eot|woff|ttf|svg|woff2)$/, use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './assets/' //define the output of the file (relative path to the workdir)
          }
          // options: {
          //     name: '[name].[ext]',
          //     outputPath: '../../img/'
          // }
        }
      }
    ]
  },
  optimization: {
    minimize: true
  },
  //fix bug cannot resolve  'fs'
  node: {
    fs: "empty"
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  plugins: [
  new CleanWebpackPlugin(),
  new CopyPlugin({
    patterns: [
      {
        from: 'public',
        cacheTransform: true,
        force: true,
      },
    ],
  }),
  new HtmlWebpackPlugin({
    template: './public/index.html',
      }),
  ],
  mode: 'production'
};