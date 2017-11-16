//压缩js

//gulp.task('jsTask', function(){
//	gulp.src('src/js/bullet.js')
//	.pipe(uglify())
//	.pipe(gulp.dest('dest'));
//});


//默认任务
//gulp.task("default", ["jsTask"]);

//先es6转es5，再压缩js
var gulp = require('gulp');
var babel = require('gulp-babel'); //es6转es5
var uglify = require('gulp-uglify'); //js压缩插件

//压缩js
gulp.task('jsTask2', function(){
	gulp.src('js/*.js')
	.pipe(babel({"presets": ["es2015"]})) //es6转es5
	.pipe(uglify()) //js压缩
	.pipe(gulp.dest('dest'));
});
gulp.task('default', ['jsTask2']);
