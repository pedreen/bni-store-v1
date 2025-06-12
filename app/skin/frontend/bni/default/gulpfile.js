var gulp = require('gulp'),
  less = require('gulp-less'),
  path = require('path');

gulp.task('less', function () {
  return gulp.src('./less/custom.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less')]
    }))
    .pipe(gulp.dest('./css'));
});