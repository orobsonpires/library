var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('watch:js', ['js'], () => {
    gulp.watch('ng/**/*.js')
})

gulp.task('js', () => {
    gulp.src(['ng/module.js', 'ng/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify().on('error', function (e) {
            console.log(e);
            // I had to remove ES6 code from the concatenated files, it seems uglify does not handler ES6 code
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets'))
})