/**
 * Base webpack config used across other specific configs
 */
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const webpack = require('webpack')
const {
  dependencies: externals
} = require('./app/package.json');

module.exports = {
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['ts-loader'],
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },

  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js',

    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2'
  },

  // https://webpack.github.io/docs/configuration.html#resolve
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    plugins: [new TsconfigPathsPlugin({configFile: "./tsconfig.main.json"})],
    modules: [
      path.join(__dirname, 'app'),
      'node_modules',
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'global.GENTLY': false
    })
  ],

  externals: Object.keys(externals || {})
};
