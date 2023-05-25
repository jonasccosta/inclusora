import gulp from 'gulp';
import deploy from 'gulp-gh-pages';


/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});