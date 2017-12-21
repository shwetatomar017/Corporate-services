var gulp = require('gulp');
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var header = require('gulp-header');
var footer = require('gulp-footer');
var tap = require('gulp-tap');
var merge = require('merge-stream');
var pkg = require('./package.json');
var path = require('path');

var jsFiles = ['src/js/**/*.js'];

function fileHeader(title) {
    return [
        '/*!',
        title + ' - ' + pkg.version,
        'Copyright © 2017 Monastyrev Ivan',
        'Licensed under the MIT license.',
        'https://github.com/ikloster03/jquery-simple-menu/blob/master/LICENSE',
        '*/\n'
    ].join('\n');
}

gulp.task('lint', function() {
    return gulp.src(jsFiles).pipe(eslint('.eslintrc')).pipe(eslint.format())
});

gulp.task('build', function() {
    return gulp.src(jsFiles)
        .pipe(concat('jquery.simple-menu.js', { newLine: ';' }))
        .pipe(header(';'))
        .pipe(header(fileHeader('JQuery Simple Menu Plugin')))
        .pipe(gulp.dest('lib/'))
        .pipe(rename('jquery.simple-menu.min.js'))
        .pipe(uglify({
            preserveComments: 'some'
        }))
        .pipe(gulp.dest('lib/'));
});

gulp.task('watch', function() {
    gulp.watch(jsFiles, ['lint', 'build']);
});

gulp.task('default', ['lint', 'build', 'watch']);
