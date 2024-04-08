const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';

const isDevMode = mode === 'development';

const target = isDevMode ? 'web' : 'browserslist';

module.exports = {
  mode,
  target,
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  entry: [
    '@babel/polyfill',
    path.resolve(__dirname, 'src', 'app', 'client', 'index.js'),
  ],
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'app', 'client', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'server.[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
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
    ],
  },
  resolve: {
    alias: {
      '@commonStyles': path.resolve(__dirname, 'src/app/client/styles'),
      '@pages': path.resolve(__dirname, 'src/pages/UI'),
    },
  },
};
