import gulp from 'gulp'
import babel from 'gulp-babel'
import plumber from 'gulp-plumber'
import sourcemaps from 'gulp-sourcemaps'
import webpack from 'webpack'
import webpackStream from 'webpack-stream'
import configDev from '../webpack.dev'
import configProd from '../webpack.prod'
import browserSync from 'browser-sync'

gulp.task('transpile:dev', () => {
  return gulp
    .src('../src/*.js')
    .pipe(plumber())
    .pipe(webpackStream(configDev, webpack))
    .pipe(gulp.dest('../public/js'))
    .pipe(browserSync.stream())
})

gulp.task('transpile:prod', () => {
  return gulp
    .src('../src/*.js')
    .pipe(plumber())
    .pipe(webpackStream(configProd, webpack))
    .pipe(gulp.dest('../public/js'))
    .pipe(browserSync.stream())
})

gulp.task('server', () => {
  return gulp
    .src('../lib/**/*.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('../dist'))
})

gulp.task('transpile', ['transpile:dev'])
