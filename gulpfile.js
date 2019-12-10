'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', () => {
  return gulp.src('./sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('sass:watch', () => {
  gulp.watch('./sass/*.scss', gulp.series('sass'));
});