const {src, dest, watch} = require('gulp');
//css
const sass = require('gulp-sass')(require('sass'));
const plumber= require('gulp-plumber');

//imagenes
const webp = require('gulp-webp');
const imageMin = require('gulp-imagemin')
const cache = require('gulp-cache')

const path = {
    scss: 'src/scss/**/*.scss',
    css: 'build/css/app.css',
    js: 'src/js/**/*.js',
    img: 'src/img/**/*.{jpg,png}',
    imgmin: 'build/img/**/*.{jpg,png}',
    svg: 'src/img/**/*.svg'
}


function css (done){
    src("src/scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(dest("build/css"))
    done()
}

function javaScript(done){
    src("src/js/**/*.js")
    .pipe(dest("build/js"))
    done()
}

function listen(done){
    watch("src/scss/**/*.scss", css)
    watch("src/js/**/*.js", javaScript)
    done()
}


function versionWebp(done){
    const opciones ={
        quiality: 80
    }

    src("src/img/**/*.{jpeg,png,jpg}")
    .pipe(webp(opciones))
    .pipe(dest("build/img"))

    done()
}

function imagenesMin(done){
    const opciones = {
        optimizationlevel: 3
    }

    src('src/img/**/*.{png,jpg,jpeg}')
    .pipe(cache(imageMin(opciones) ) )
    .pipe(dest('build/img'))

    done()
}


exports.css=css;
exports.listen=listen
exports.versionWebp=versionWebp
exports.imagenesMin=imagenesMin