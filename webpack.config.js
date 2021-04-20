const HtmlWebpackPlugin = require('html-webpack-plugin');
const prod = process.env.NODE_ENV === 'production';
const webpack = require('webpack');
const path = require('path');

module.exports = {
  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 3000,
    hot: true,
    publicPath: '/',
  },
  mode: prod ? 'production' : 'development',
  devtool: prod ? 'hidden-source-map' : 'eval',

  entry: './client.tsx',

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
      },
    ],
  },

	output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },

  plugins: [
		new webpack.ProvidePlugin({
      React: 'react',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};