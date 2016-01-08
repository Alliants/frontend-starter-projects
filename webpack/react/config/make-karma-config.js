var webpackConfig = require('./webpack.config.test.js');

module.exports = function (options) {
  var karmaConfig = {
    frameworks: ['mocha', 'expect'],

    browsers: ['PhantomJS'],

    files: [
      // This shim adds .bind to PhantomJS
      './phantomjs-shim.js',
      '../app/**/*.spec.js'
    ],

    preprocessors: {
      '../app/**/*.spec.js': ['webpack']
    },

    webpackMiddleware: {
      noInfo: true
    },

    reporters: ['mocha'],

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-expect',
      'karma-phantomjs-launcher',
      'karma-mocha-reporter',
    ]
  };

  if (options.coverage) {
    // Needs to load first to prevent linting issues
    webpackConfig.module.preLoaders = [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'isparta-instrumenter-loader',
    }].concat(webpackConfig.module.preLoaders);

    karmaConfig.plugins.push('karma-coverage');

    karmaConfig.coverageReporter = {
      dir: '../coverage',
      reporters: options.coverageReporters || [
        { type: 'text' },
        { type: 'html' }
      ],
    };

    karmaConfig.reporters.push('coverage');
  }

  if (options.notify) {
    karmaConfig.reporters.push('notify');
    karmaConfig.plugins.push('karma-notify-reporter');
  }

  karmaConfig.webpack = webpackConfig;

  return karmaConfig;
};
