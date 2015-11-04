'use strict';

var browserify = require('browserify');
var stringify = require('stringify');
var watchify = require('watchify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');

var customOpts = {
    entries: ['./client/js/main.js'],
    debug: true,
    transform: stringify({
        extensions: ['.html'],
        minify: true
    })
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));

gulp.task('default', ['build', 'watch']);
gulp.task('build', ['js', 'css']);
gulp.task('js', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

function bundle() {
    return b.bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
}

gulp.task('clean-css', function (cb) {
    return del([
        'dist/style/*'
    ], cb);
});

gulp.task('css', ['clean-css'], function() {
    return gulp.src('client/style/main.less')
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist/style'))
});

gulp.task('watch', function() {
    gulp.watch('client/style/*.less', ['css']);
});