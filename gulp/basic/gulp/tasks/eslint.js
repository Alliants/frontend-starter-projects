'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var config = require('../config');

gulp.task('eslint', function () {
  return gulp.src(config.js.src)
    .pipe(eslint(config.eslint.dev))
    .pipe(eslint.format());
});
