var gulp = require('gulp');
var server = require('gulp-webserver');
gulp.task('server', function() {
    return gulp.src('src')
        .pipe(server({
            port: 8080
        }))
})