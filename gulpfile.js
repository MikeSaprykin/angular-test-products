var gulp = require('gulp');
var browserSync = require('browser-sync').create();
const babel = require('gulp-babel');

module.exports = {
  presets: [
    'es2015',
  ],
  moduleIds: false,
  comments: true,
  compact: false
};

gulp.task('reload',function(){
  browserSync.reload()
});

gulp.task('watch', function(){
  gulp.watch('src/**/*.js',['es6','reload']);
  gulp.watch('src/**/*.html',['reload']);
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

gulp.task('serve', ['watch'], function () {
  browserSync.init({
    port: 9000,
    server: {
      baseDir: "./"
    },
  });
});