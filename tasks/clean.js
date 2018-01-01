import gulp from 'gulp'
import del from 'del'

gulp.task('clean:server', () => {
  return del('../dist/**/*', {
    force: true
  })
})

gulp.task('clean:public', () => {
  return del('../public/**/*', {
    force: true
  })
})
gulp.task('clean', ['clean:server', 'clean:public'])
