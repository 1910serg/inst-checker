const path = require('path');

module.exports = {
  target: 'node',
  mode: 'production',
  entry: {
    server: path.resolve('src', 'server', 'index.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve('build'),
  },
  module: {
    rules: [
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
};
