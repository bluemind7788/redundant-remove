var gulp = require('gulp');
var del = require('del');
var uncss = require('gulp-uncss');

var plumber = require('gulp-plumber');

var deleteUnusedImages = require('gulp-delete-unused-images');

gulp.task('clean', function () {
		del.sync('build/**/*'); 
	});

// 删除无用css
gulp.task('task-uncss', function () {
	gulp.src('src/css/*.css')
        .pipe(uncss({
            html: ['src/*.html']
        }))
        .pipe(gulp.dest('build/css'));	  
});

// 删除无用image
gulp.task('task-deleteUnusedImages', function () {			
	gulp.src(['src/images/**/*', 'src/*.html', 'src/css/*.css'])
	  .pipe(plumber())
	  .pipe(deleteUnusedImages({
		log: true,
		delete: true
	  }));
	gulp.src(['src/images/*.*'])
	  .pipe(gulp.dest('build/images'));	
	  
});

gulp.task('default', ['task-uncss', 'task-deleteUnusedImages']);





  
  