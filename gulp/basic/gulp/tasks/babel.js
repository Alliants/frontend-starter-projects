'use strict';

var gulp = require("gulp");
var babel = require("gulp-babel");
var config = require("../config").js;

gulp.task("babel", ["eslint"], function () {
  return gulp.src(config.src)
    .pipe(babel())
    .pipe(gulp.dest(config.dest));
});
