var gulp = require('gulp');
var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');
const babel = require('gulp-babel');

module.exports = {
  presets: [
    'es2015',
  ],
  moduleIds: false,
  comments: true,
  compact: false
};

gulp.task('watch', function(){
  gulp.watch('src/**/*.js',['es6',browserSync.reload()]);
  gulp.watch('src/**/*.html',browserSync.reload());
});

gulp.task('es6', function () {
  return gulp.src('src/**/*.js', { base: 'src' })
    .pipe(babel({
      presets: [
        'es2015',
      ]
    }))
    .pipe(gulp.dest('dist/'))
});

gulp.task('serve', ['es6','watch'], function (done) {
  browserSync({
    port: 8080,
    server: {
        baseDir: "./"
    },
  }, done);
});