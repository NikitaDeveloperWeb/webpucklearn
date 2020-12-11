const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.js',
    analytics: './analytics.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.png', '.csv'],
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  // target: 'web',
  devServer: {
    port: 4200,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/favicon.ico'), to: path.resolve(__dirname, 'dist') },
      ],
    }),
  ],
  module: {
    rules: [
      //styles
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], //rigth to left
      },
      //image
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader'],
      },
      //fonts
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader'],
      },
      //xml
      {
        test: /\.xml$/,
        use: ['xml-loader'],
      },
      //csv
      {
        test: /\.csv$/,
        use: ['csv-loader'],
      },
    ],
  },
};
