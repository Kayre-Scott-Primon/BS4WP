var gulp = require('gulp')
var sass = require('gulp-sass')(require('sass'))

gulp.task('sass', gulp.series( function() {
    return gulp.src(['node_modules/bootstrap/scss/*.scss', 'src/scss/*.scss'])
    .pipe(sass()) //converter o Sass em CSS
    .pipe(gulp.dest('src/css')); //destino
}));

gulp.task('watch', gulp.series( function() {
    gulp.watch(['node_modules/bootstrap/scss/*.scss', 'src/scss/*.scss'], gulp.parallel( ['sass']))
}));

exports.default = gulp.series('sass', 'watch')