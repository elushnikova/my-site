const { watch, parallel, src, dest } = require("gulp");
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require("gulp-clean-css");

const srcPath = "src/";
const destPath = "dist/";

function minifyHtml() {
  return src(`${srcPath}/*.html`)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(destPath));
}

function minifyRuHtml() {
  return src(`${srcPath}/ru/*.html`)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(`${destPath}/ru/`));
}

function minifyCss() {
  return src(`${srcPath}/*.css`)
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest(destPath));
}

function copyFonts() {
  return src(`${srcPath}/fonts/*.ttf`)
    .pipe(dest(`${destPath}/fonts/`));
}

exports.build = parallel(minifyHtml, minifyRuHtml, minifyCss, copyFonts);