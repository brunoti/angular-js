var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    rename = require('gulp-rename'),
    minify = require('gulp-minify-css');


gulp.task('css', function(){
    gulp.src('assets/css/*.css')
       .pipe(minify()) 
       .pipe(rename('style.min.css'))
       .pipe(gulp.dest('assets/css/'));
});

gulp.task('less', function () {
    gulp.src('assets/less/style.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('default', function(){
    gulp.watch('assets/less/*.less',['less', 'css']);
});
