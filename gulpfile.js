var gulp = require('gulp');
var browserSync = require('browser-sync').create();
gulp.task('serve',function(){
	
	browserSync.init({
		server: {
			baseDir: './app'
		}
	});
	gulp.watch('./app/*.html').on('change',browserSync.reload);
	gulp.watch('./app/*.js').on('change',browserSync.reload);	
});

gulp.task('default',['serve']);