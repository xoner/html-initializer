var gulp = require('gulp');

gulp.task('default', ['init']);

gulp.task('init', function () {
    var uglyfy = require('gulp-uglify');
    var file = require('gulp-file');

    // Move jquery to the root folder
    gulp.src('bower_components/jquery/dist/*.min.js')
        .pipe(gulp.dest('js/vendor'));

    // Move modernizr to the root folder
    gulp.src('bower_components/modernizr/modernizr.js')
        .pipe(uglyfy())
        .pipe(gulp.dest('js/vendor'));

    // move the bootstrap components to the root folder.
    gulp.src('bower_components/bootstrap/dist/css/*.min.css')
        .pipe(gulp.dest('css'));

    gulp.src('bower_components/bootstrap/dist/js/*.min.js')
        .pipe(gulp.dest('js/vendor'));

    gulp.src('bower_components/bootstrap/dist/fonts/*')
        .pipe(gulp.dest('fonts'));

    // move the fontawesome components to the root folder.
    gulp.src('bower_components/fontawesome/css/*.min.css')
        .pipe(gulp.dest('css'));

    gulp.src('bower_components/fontawesome/fonts/*')
        .pipe(gulp.dest('fonts'));


    // Create the aplication css and js main files
    file('main.js', '// Add your js here').pipe(gulp.dest('js'));
    file('main.css', '/* Add your css here */').pipe(gulp.dest('css'));
});

gulp.task('serve', function(){
    var connect = require('gulp-connect');

    connect.server({
        port: 8000,
        livereload: true
    });
});
