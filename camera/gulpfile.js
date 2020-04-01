const { src, dest, series } = require("gulp");
var rename = require("gulp-rename");
let uglify = require("gulp-uglify-es").default;
var gutil = require("gulp-util");
var stripDebug = require("gulp-strip-debug");
const concat = require("gulp-concat");

function concatJs() {
  return (
    src(["js/AgoraRTCSDK-3.0.2.js", "build/demo.min.js"])
      .pipe(concat("jssdk.js"))
      .pipe(stripDebug())
      // .pipe(uglify())
      .pipe(rename("livefuller-jssdk.min.js"))
      .pipe(dest("build/", { sourcemaps: false }))
  );
}

function uglifyifyDemo() {
  return src("js/demo.js")
    .pipe(rename("demo.min.js"))
    .pipe(stripDebug())
    .pipe(uglify())
    .on("error", function(err) {
      gutil.log(gutil.colors.red("[Error]"), err.toString());
    })
    .pipe(dest("build/"));
}

exports.uglifyifyDemo = uglifyifyDemo;
exports.concatJs = concatJs;
exports.default = series(uglifyifyDemo, concatJs);
