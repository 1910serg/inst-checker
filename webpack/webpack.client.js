const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { IS_DEV } = require('./env.js');

const clientConfig = {
  mode: IS_DEV ? 'development' : 'production',
  entry: path.resolve(__dirname, '..', 'src', 'app', 'client', 'index.js'),
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'build/[name].js',
  },
  devtool: IS_DEV ? 'source-map' : false,
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'public', 'index.html'),
      minify: {
        removeComments: !IS_DEV,
        collapseWhitespace: !IS_DEV,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'build/styles.css',
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
                localIdentName: IS_DEV
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
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.pdf$/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,

        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /node_modules/,
        },
      },
    },
  },
  resolve: {
    alias: {
      '@breakpoints': path.resolve(
        __dirname,
        '..',
        'src/app/UI/App/breakpoints'
      ),
      '@colors': path.resolve(
        __dirname,
        '..',
        'src',
        'app',
        'UI',
        'App',
        'colors'
      ),
      '@pages': path.resolve(__dirname, '..', 'src', 'pages', 'UI'),
    },
    extensions: ['.js', '.jsx', '.scss', '.json'],
  },
};

module.exports = clientConfig;
