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

gulp.task('sass', function() {
    return sass('./src/sass/',  { style: 'expanded' })
        .pipe(plumber())
        .pipe(plumber.stop())
        .pipe(gulp.dest('./src/css/'))
        .pipe(browser.reload({stream:true}));
});

gulp.task("default",['server'], function() {
	gulp.watch('./src/sass/*.scss',['sass']);
});
