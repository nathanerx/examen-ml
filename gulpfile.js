const gulp = require('gulp');
const sass = require('gulp-sass');
const nodemon = require('gulp-nodemon');
const jade = require('gulp-jade');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const order = require('gulp-order');
const eslint = require('gulp-eslint');

gulp.task('sass', () => {
  return gulp.src('./public/**/*.scss')
    .pipe(order([
      '**/reset.scss',
      '**/_grid.scss',
      '**/layout.scss',
      '**/page-*.scss',
      '**/*.scss'
    ]))
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public/dist/css'));
});

gulp.task('jade', () => {
  return gulp.src('./public/js/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./public/dist/template'));
});

gulp.task('minifyJs', () => {
  return gulp.src('./public/js/**/*.js')
    .pipe(order([
      '**/app.js',
      '**/*.module.js',
      '**/*.component.js',
      '**/*.js'
    ]))
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/dist/js'));
});

gulp.task('eslint', () => {
  return gulp.src(['**/*.js', '!node_modules/**', '!public/dist/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('start', () => {
  nodemon({
    script: './server.js',
    ext: 'js jade scss',
    env: { 'NODE_ENV' : 'development' },
    tasks: ['eslint', 'jade', 'sass', 'minifyJs'],
    ignore: ['/public/dist']
  });
});

gulp.task('default', ['sass', 'jade', 'minifyJs', 'eslint', 'start']);