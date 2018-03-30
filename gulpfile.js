var gulp=require('gulp'),
watch=require('gulp-watch'),
postcss=require('gulp-postcss'),
autoprefixer=require('autoprefixer'),
simpleVars=require('postcss-simple-vars'),
nestedCss=require('postcss-nested');
gulp.task('default',function(){
    console.log("hurray success");
})
gulp.task('html',function(){
    console.log("updated html file");
})
gulp.task('style',function(){
    return gulp.src("./assets/styles/style.css")
    .pipe(postcss([simpleVars,autoprefixer,nestedCss]))
    .pipe(gulp.dest('./temp/styles'))
})
gulp.task('watch',function(){
    watch('./index.html',function(){
        gulp.start('html')
    })
    watch('./assets/styles/**/*.css',function(){
        gulp.start('style');
    })
})