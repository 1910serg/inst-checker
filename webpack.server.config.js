const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  target: 'node',
  mode: 'production',
  entry: [path.resolve(__dirname, 'src', 'app', 'server', 'index.js')],
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'server.[contenthash].css',
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
                localIdentName: '[hash:base64:5]',
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
