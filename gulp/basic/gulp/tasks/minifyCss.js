'use strict';

var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var size = require('gulp-filesize');
var config = require('../config').build;

gulp.task('minifyCss', ['sass'], function () {
  return gulp.src(config.cssSrc)
    .pipe(minifyCSS({ keepBreaks: true }))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
