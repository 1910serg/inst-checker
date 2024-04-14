const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';
const isDevMode = mode === 'development';

module.exports = {
  mode: isDevMode ? 'development' : 'production',
  entry: {
    client: path.resolve(__dirname, 'src', 'app', 'client', 'index.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  devtool: isDevMode ? 'source-map' : false,
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'app', 'client', 'index.html'),
      minify: {
        removeComments: !isDevMode,
        collapseWhitespace: !isDevMode,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'client.[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: isDevMode
                  ? '[path]__[name]__[local]--[hash:base64:5]'
                  : '[hash:base64:5]',
              },
            },
          },
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          },
        ],
      },
      {
        test: /\.(?:js|mjs|cjs|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    alias: {
      '@breakpoints': path.resolve(__dirname, 'src/app/UI/App/breakpoints'),
      '@colors': path.resolve(__dirname, 'src/app/UI/App/colors'),
      '@pages': path.resolve(__dirname, 'src/pages/UI'),
    },
    extensions: ['.js', '.jsx', '.scss', '.json'],
  },
};
