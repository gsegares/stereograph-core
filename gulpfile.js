var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("./tsconfig.json");
var inlineNg2Template = require('gulp-inline-ng2-template');
var merge = require('merge2');
var sourcemaps = require('gulp-sourcemaps');

gulp.task("default", function () {
  console.log('Converting external Angular 2 HTML and CSS relative path templates to inline templates...');
  
  var JS_DESTINATION = gulp.dest("dist");

  var tsResult = tsProject.src()
      .pipe(inlineNg2Template({ 
        base: './src/app',
        useRelativePaths: true,
        removeLineBreaks: true,
        templateProcessor: function(path, ext, file, cb) {
          console.log('Applying processing to component template HTML...');
          try {
            var minify = require('html-minifier').minify;
            var html = minify(file, {
              collapseWhitespace: true,
              caseSensitive: true,
              removeComments: true,
              removeRedundantAttributes: true
            });
            cb(null, html);
          } catch (err) { 
            cb(err); 
          }
        },
        styleProcessor: function(path, ext, file, cb) {
          console.log('Applying processing to component styling CSS...');
          try {
            var postcss = require('postcss');
            var csso = require('csso');
            var autoprefixer = require('autoprefixer');
            var stylus = require('stylus');

            var css = stylus.render(file);
            css = postcss([autoprefixer]).process(css).css;
            css = csso.minify(css).css;
            cb(null, css);

          } catch (err) { 
            cb(err); 
          }
        },
      }))
      .pipe(sourcemaps.init())
      .pipe(tsProject());

  return merge([
    tsResult.dts.pipe(JS_DESTINATION),
    tsResult.js.pipe(sourcemaps.write()).pipe(JS_DESTINATION)
  ]);
});

  