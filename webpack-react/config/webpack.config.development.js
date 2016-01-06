var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var localIdentName = '[path]-[local]-[hash:base64:5]';
var scssLoaders = 'style!css?localIdentName=' + localIdentName + '!autoprefixer?browsers=last 2 versions!sass?includePaths[]=' + encodeURIComponent(path.resolve(__dirname, "../node_modules/"));


module.exports = {

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app/App.js'
  ],

  debug: true,

  devtool: 'eval',

  output: {
    path: './build',
    publicPath: 'http://localhost:8080/',
    filename: 'app.js',
  },

  resolve: {
    root: path.resolve('./app'),
    extensions: ['', '.js', '.jsx', '.scss', '.svg', '.gif', '.png', '.jpg'],
    alias: {
      config: path.join(__dirname, '../app/config/development')
    }
  },

  devServer: {
    contentBase: './build',
    colors: true,
    progress: true,
    hot: true,
    inline: true,
    historyApiFallback: true
  },

  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'eslint',
    }],
    loaders: [{
      test: /\.png$/,
      loader: "url?limit=100000&mimetype=image/png",
    }, {
      test: /\.svg$/,
      loader: "url?limit=100000&mimetype=image/svg+xml",
    }, {
      test: /\.gif$/,
      loader: "url?limit=100000&mimetype=image/gif",
    }, {
      test: /\.jpg$/,
      loader: "file",
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot',
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: scssLoaders,
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './config/tmpl.html'
    })
  ]

};
