var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('sass', function () {
    return gulp.src('./assets/src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/dist/css'));
});

gulp.task('clean-css', function () {
    return gulp.src(['./assets/dist/css/**/*.css', '!./assets/dist/css/**/*.min.css'])
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./assets/dist/css'));
});

gulp.task('watch-sass', function () {
    gulp.watch('./assets/src/sass/**/*.scss', ['sass']);
});

gulp.task('watch-css', function () {
    gulp.watch('./assets/dist/css/**/*.css', ['clean-css']);
});

gulp.task('default', ['sass', 'clean-css', 'watch-sass', 'watch-css']);