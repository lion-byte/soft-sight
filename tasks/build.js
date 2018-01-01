import gulp from 'gulp'
import gulpSequence from 'gulp-sequence'

gulp.task(
  'build:public',
  gulpSequence('clean:public', ['transpile', 'styles', 'pages'])
)
gulp.task('build:server', gulpSequence('clean:server', ['server']))

gulp.task(
  'build:dev',
  gulpSequence('clean', ['server', 'transpile', 'styles', 'pages'])
)
gulp.task(
  'build:prod',
  gulpSequence('clean', ['server', 'transpile:prod', 'styles', 'pages'])
)
gulp.task('build', ['build:dev'])
