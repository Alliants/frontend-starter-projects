'use strict';

var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['babel', 'browserSync'], function (callback) {
  gulp.watch(config.sass.src, ['sass']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.markup.src, ['markup']);
  gulp.watch(config.js.src, ['babel']);
});
