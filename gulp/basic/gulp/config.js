'use strict';

var dest = "./build";
var src = './src';

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
    }
  },
  eslint: {
    dev: {
      extends: "eslint:recommended",
      rules: {
        "no-console": 0,
        "camelcase": 1,
        "curly": 1,
        "semi": 1,
        "guard-for-in": 1,
        "quotes": [2, "single", "avoid-escape"]
      },
      env: {
        "browser": true,
        "node": true
      }
    }
  },
  js: {
    src: src + '/js/**/*.js',
    dest: dest
  },
  sass: {
    src: src + "/scss/**/*.{sass,scss}",
    dest: dest,
    settings: {
      imagePath: 'images' // Used by the image-url helper
    }
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  markup: {
    src: src + "/html/**",
    dest: dest
  },
  build: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};
