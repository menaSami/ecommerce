var gulp        = require ('gulp'),
    uglify      = require('gulp-uglify'),
    header      = require('gulp-header'),
    rename      = require('gulp-rename'),
    plumber     = require('gulp-plumber'),
    imagemin    = require('gulp-imagemin'),
    pkg         = require('./package.json'),
    cleanCSS    = require('gulp-clean-css'),
    autoprefix  = require('autoprefixer'),
    rucksack    = require('rucksack-css'),
    postcss     = require('gulp-postcss'),
    sass        = require('gulp-sass'),
    lost        = require('lost');

var files = {
  title: 'project',
  version: '1.0',
  desginer: {
    name: 'melad & mena',
    url: 'www.jesus.com'
  },
  inSass: ['vindor/sass/*/*.scss', 'vindor/sass/*.scss' ],
  outCss: 'puplic/css/',
  css: 'puplic/css/',
  outJs: 'puplic/js/',
  inJs: 'vindor/js/*.js'
};

// Copyright
var banner = ['/*!\n',
  ' * '+ files.title +' v'+ files.version +' Copyright &copy; '+ (new Date()).getFullYear() +'\n',
  ' * All Desgin &amp; code by '+ files.desginer.name +' | '+ files.desginer.url +'\n',
  ' */\n', ''].join('');

// uglify For javaScript mini
gulp.task('scripts', function(){
  gulp.src(files.inJs)
      .pipe(plumber())
      .pipe(header(banner, { pkg: pkg }))
      .pipe(gulp.dest(files.outJs))
      .pipe(uglify())
      .pipe(header(banner, { pkg: pkg }))
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest(files.outJs));
});
//sass for compile the code
gulp.task('sass', function(){
  'use strict';
  var processors = [
    lost(),
    rucksack(),
    autoprefix()
  ];

  gulp.src(files.inSass)
      .pipe(plumber())
      .pipe(sass({
        outputStyle: 'expanded'
      }))
      .pipe(postcss(processors))// use processors
      .pipe(header(banner, { pkg: pkg }))
      .pipe(gulp.dest(files.outCss))// convert to css
      .pipe(cleanCSS())
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest(files.outCss));// css to minify
});

// gulp watch is fot watching file

gulp.task('watch', function(){
  gulp.watch(files.inSass, ['sass']);
  gulp.watch(files.inJs, ['scripts']);
});

gulp.task('default', ['scripts','sass','watch']);
