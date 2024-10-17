/**
 * This file handles the live SCSS compilation along with
 * Autoprefixer integration.
 * Watch SCSS file(s) for changes and automatically
 * recompile them with browser compatibility fixes.
 * 
 * run command "npx gulp"
 * to start watching and compile automatically
 */

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");

// SCSS compilation and Autoprefixer
gulp.task("sass", function () {
  return gulp
    .src("styles/scss/main.scss") // Source SCSS file
    .pipe(sass().on("error", sass.logError)) // Compile SCSS to CSS
    .pipe(postcss([autoprefixer()])) // Apply Autoprefixer
    .pipe(cleanCSS()) // Minify the CSS
    .pipe(gulp.dest("dist")); // Output to dist folder
});

// Watch for file changes
gulp.task("watch", function () {
  gulp.watch("styles/**/*.scss", gulp.series("sass")); // Watch SCSS changes
});

// Default task to run both compilation and watching
gulp.task("default", gulp.series("sass", "watch"));
