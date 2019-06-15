const gulp = require("gulp");
const changed  = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const imageminJpg = require('imagemin-jpeg-recompress');
const imageminPng = require('imagemin-pngquant');
const imageminGif = require('imagemin-gifsicle');
const mozjpeg  = require('imagemin-mozjpeg');

// 圧縮前と圧縮後のディレクトリを定義
var paths = {
  srcDir : './precompile/images/',
  dstDir : './assets/imgs/'
}

gulp.task('default', (done) => {
  var srcGlob = paths.srcDir + '/**/*.+(jpg|jpeg|png|gif)';
  var dstGlob = paths.dstDir;
  gulp.src( srcGlob )
  .pipe(changed( dstGlob ))
  .pipe(imagemin([
    imageminPng(),
    imageminJpg(),
    imageminGif({
      interlaced: false,
      optimizationLevel: 3,
      colors:180
    })
  ]
  ))
  .pipe(gulp.dest( dstGlob ));
  done()
});