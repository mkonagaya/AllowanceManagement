const path = require('path');
const nodeExternals = require('webpack-node-externals');
const glob = require('glob');
const entries = glob.sync('./src/*.ts');

module.exports = {
  mode: 'production',
  entry: entries,
  output: {
    filename: 'server.js',
    path: path.join(__dirname, 'dist')
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module:{
    rules:[
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  
  externals: [
    nodeExternals()
  ]
};