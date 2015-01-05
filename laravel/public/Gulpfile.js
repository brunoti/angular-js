var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    rename = require('gulp-rename'),
    minify = require('gulp-minify-css');


gulp.task('css', function(){
    gulp.src('css/style.css')
       .pipe(minify()) 
       .pipe(rename('style.min.css'))
       .pipe(gulp.dest('css'));
});

gulp.task('less', function () {
    gulp.src('less/style.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('default', function(){
    gulp.watch('less/*.less',['less', 'css']);
});
