'use strict';

const { watch, parallel, series, src, dest } = require('gulp');
const del = require('delete');
const sass = require('gulp-sass')(require('sass'));
const gcmq = require('gulp-group-css-media-queries');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sassLint = require('gulp-sass-lint');
const insert = require('gulp-insert');

function clean(cb) {
  del(['../css', '../js'], { force: true }, cb);
}

function styles(cb) {
  return src('scss/**/*.scss')
    .pipe(sass().on("error", sass.logError))
    .pipe(gcmq())
    .pipe(dest('../css'))
    .pipe(postcss([
      autoprefixer(), 
        cssnano() 
      ]))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(dest('../css'));
  cb();
}

function scsslint(cb) {
  return src('scss/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
  cb();
}

function scripts(cb) {
  return src(['scripts/main.js', 'scripts/**/*.js'])
    .pipe(insert.append('\n\n'))  
    .pipe(concat('main.js'))
    .pipe(dest('../js'))
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(dest('../js'));
  cb();
}

function watching() {
    watch('scss/**/*.scss', parallel(styles, scsslint));
    watch('scripts/**/*.js', parallel(scripts));
}

exports.clean = clean;
exports.styles = styles;
exports.scsslint = scsslint;
exports.scripts = scripts;
exports.watching = watching;
exports.default = series([clean], styles, scsslint, scripts, watching)
