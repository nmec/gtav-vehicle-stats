var gulp = require('gulp'),
	concat = require('gulp-concat'),
	livereload = require('gulp-livereload'),
	browserify = require('gulp-browserify'),
	rename = require('gulp-rename'),
	handlebars = require('gulp-ember-handlebars');

var src = {
	js: [
		'assets/js/**/*.js'
	],
	templates: [
		'assets/templates/**/*.hbs'
	],
	html: [
		'**/*.html',
		'**/*.htm'
	]
};

gulp.task('browserify', function(){
	return gulp.src('assets/js/index.js')
		.pipe(browserify({
			insertGlobals : false,
			debug : true,
		}))
		.pipe(rename('build-dev.js'))
		.pipe(gulp.dest('./assets/js/'));
});

gulp.task('templates', function(){
	return gulp.src(src.templates)
		.pipe(handlebars({
			outputType: 'browser'
		}))
		.pipe(concat('templates.js'))
		.pipe(gulp.dest('./assets/js/'));
});


gulp.task('watch', function(  ) {

	// gulp.watch(src.sass, ['styles:dev']);

	gulp.watch(src.templates, ['templates']);
	gulp.watch(src.js, ['browserify']);

	src.all = [];
	src.all.push(src.js, src.html);

	var server = livereload();
	gulp.watch( src.all ).on('change', function( file ) {
		server.changed(file.path);
	});
});

gulp.task('default', ['browserify', 'templates', 'watch']);