const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'src');

module.exports = {
  debug: true,
  devtool: 'eval',
  entry: ['webpack-hot-middleware/client', './src/index.tsx'],
  module: {
    preLoaders: [{
      test: /\.tsx?$/,
      loader: 'tslint',
      include: SRC_DIR
    }],
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['babel', 'ts'],
      include: SRC_DIR
    }]
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '..', 'build'),
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    root: [SRC_DIR],
    extensions: ['', '.jsx', '.js', '.tsx', '.ts']
  }
};
