var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('watch:css', ['css'], () => {
    gulp.watch('ng/**/*.styl')
})

gulp.task('css', () => {
    gulp.src('css/**/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('assets'))
})