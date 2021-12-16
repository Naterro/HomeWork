const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const spritesmith = require('gulp.spritesmith');
const rimraf = require('rimraf');
const rename = require("gulp-rename");


gulp.task('server',function (){
    browserSync.init({
        browser: "firefox",
        server:{
            port:9000,
            baseDir:"build",

        }
    })
    gulp.watch('build/**/*').on('change',browserSync.reload);
})
gulp.task('clean',function del(cb){
    return rimraf('build/*',{},cb);
})
gulp.task('compile:pug', function (){
    return gulp.src('source/templates/**/*.pug')
        .pipe(
            pug({
                pretty:true
            })
        )
        .pipe(gulp.dest('build'));
});
gulp.task('compile:sass',function (){
    return gulp.src('source/css/style.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('build/css'));
})
gulp.task('watch',function (){

    gulp.watch('source/css/**/*.scss',gulp.series("compile:sass"));
    gulp.watch('source/templates/**/*.pug',gulp.series("compile:pug"));
    /*    gulp.watch('build/css/!*.css',gulp.series("autoprefixer"));*/
})
/* gulp default task */
gulp.task('default',gulp.series(
    'clean',
    gulp.parallel("compile:sass","compile:pug"),
    gulp.parallel("watch","server")
))