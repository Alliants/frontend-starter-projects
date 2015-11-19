'use strict';

var gulp = require('gulp');

// Run this to compress all the things!
gulp.task('build', function (){
  gulp.start(['markup', 'images', 'minifyCss', 'uglifyJs'])
});
