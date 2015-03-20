"use strict";

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var karma = require('karma').server;
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');

//not sure if still needed with browserify
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var paths = {
  scripts: [
    'client/app/**/*.js',
    'server/**/*.js'
  ],
  build: [
    'client/app/**/*.js',
  ],
  dist: 'client/dist'
}

gulp.task('default', [
  'lint', 'karma', 'watch']);

gulp.task('test', ['mocha', 'karma']);

gulp.task('watch', function(){
  gulp.watch(paths.scripts, ['lint']);
});

gulp.task('lint', function () {
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('mocha', function () {
  return gulp.src('test/*.js')
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('karma', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('build', function () {
  return gulp.src(paths.build)
    .pipe(uglify())
    .pipe(concat('scripts.min.js'))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('serve', function () {
  nodemon({
    script: 'index.js',
    ext: 'html, js',
    ignore: ['node_modules']
  })
  .on('change', ['lint', 'mocha'])
  .on('restart', function () {
    console.log('restarting server');
  });
});