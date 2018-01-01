import gulp from 'gulp'
import browserSync from 'browser-sync'
import path from 'path'

const watchOptions = {
  delay: 2500
}

gulp.task('watch', () => {
  browserSync.init({
    server: path.resolve(__dirname, '../public'),
    port: 4000,
    ui: {
      port: 4001
    }
  })

  gulp.watch(path.join(__dirname, '../src/**/*.js'), watchOptions, [
    'transpile:dev'
  ])
  gulp.watch(path.join(__dirname, '../styles/**/*.less'), watchOptions, [
    'styles'
  ])
  gulp.watch(path.join(__dirname, '../pages/**/*.ejs'), watchOptions, ['pages'])
  gulp.watch(
    path.join(__dirname, '../public/**/*.html'),
    watchOptions,
    browserSync.reload
  )
})
