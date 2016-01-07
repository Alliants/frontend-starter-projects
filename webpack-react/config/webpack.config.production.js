var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var localIdentName = '[hash:base64]';
var scssLoaders = 'style!css?localIdentName=' + localIdentName + '!autoprefixer?browsers=last 2 versions!sass?includePaths[]=' + encodeURIComponent(path.resolve(__dirname, "../node_modules/"));


function extractForProduction(loaders) {
  return ExtractTextPlugin.extract('style', loaders.substr(loaders.indexOf('!')));
}

scssLoaders = extractForProduction(scssLoaders);


module.exports = {

  entry: './app/App.js',

  debug: false,

  output: {
    path: './dist',
    publicPath: '',
    filename: 'app.[hash].js',
  },

  resolve: {
    root: path.resolve('./app'),
    extensions: ['', '.js', '.jsx', '.scss', '.svg', '.gif', '.png', '.jpg'],
    alias: {
      config: path.join(__dirname, '../app/config/production')
    }
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
      loader: 'babel'
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: scssLoaders,
    }]
  },

  plugins: [
    // Important to keep React file size down
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production"),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new ExtractTextPlugin("app.[hash].css"),
    new HtmlWebpackPlugin({
      template: './config/tmpl.html',
      production: true,
    }),
  ]

};
