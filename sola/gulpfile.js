var gulp = require("gulp");
var sass = require("gulp-ruby-sass");
var browser = require("browser-sync");
var plumber = require("gulp-plumber");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("server", function(){
	browser({
		server:{
			       baseDir: "./src"
		       }
	});
});

gulp.task('html', function(){
	gulp.src('./src/*.html')
			.pipe(plumber())
			.pipe(browser.reload({stream:true}));
});

gulp.task('javascript', function(){
	gulp.src('./src/js/*.js')
			.pipe(plumber())
			.pipe(browser.reload({stream:true}));
});

gulp.task('sass', function() {
    return sass('./src/sass/',  { style: 'expanded' })
        .pipe(plumber())
        .pipe(gulp.dest('./src/css/'))
        .pipe(browser.reload({stream:true}));
});


gulp.task("default",['server'], function() {
	gulp.watch('./src/sass/*.scss',['sass']);
	gulp.watch('./src/*.html',['html']);
	gulp.watch('./src/js/*.js',['javascript']);
});
