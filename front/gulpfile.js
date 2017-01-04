/**
 * Created by hab on 03/11/16.
 */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('./gulp.config')(); // require the file and run it to get the config  var
var fs = require('fs');



gulp.task('copyFiles',  ['copyMain', 'copyConfig','copyFont', 'copyFonts','copyImg','copyImage','copyRequire']);
gulp.task('buildDist', [ 'copyFiles', 'ngAnnotate']);
gulp.task('loadBowerModules', [  'wiredep' ]);
gulp.task('minifySinglifyFiles', [  'requirejsOptimize', 'optimize']);
gulp.task('prod', $.sequence('cleanDist','templatecache','buildDist','injectModule','loadBowerModules', 'minifySinglifyFiles','uglify','clean', 'webserver'));

/**
 *
 * Run the application in the server
 *
 * */
gulp.task('webserver', function() {
    gulp.src(config.dist)
        .pipe($.webserver({
            fallback: 'index.html',
            open: true
        }));
});

/**
 *
 * Make a copy for the file "main.js"
 *
 * */
gulp.task('copyMain', function(){
    return gulp.src('main.js')
        .pipe(gulp.dest(config.dist+'/tmp'));
});

/**
 *
 *Make a copy for the config file of the application
 *
 * */
gulp.task('copyConfig', function(){
    return gulp.src('config/config.js')
        .pipe(gulp.dest(config.dist+'/tmp/config'));
});

/**
 *
 * Copy the content of the directory "font"
 *
 * */
gulp.task('copyFont', function(){
    return gulp.src(config.fontSRC)
        .pipe($.rename({dirname: ''}))
        .pipe(gulp.dest(config.fontDist));
});

/**
 *
 * Copy the content of the directory "fonts"
 *
 * */
gulp.task('copyFonts', function(){
    return gulp.src(config.fontsSRC)
        .pipe($.rename({dirname: ''}))
        .pipe(gulp.dest(config.fontsDist));
});

/**
 *
 * Copy of the Img Folder
 *
 * */
gulp.task('copyImg', function(){
    return gulp.src(config.imgSrc)
        .pipe($.rename({dirname: ''}))
        .pipe($.imagemin({
            optimizationLevel: 3,
            progessive: true,
            interlaced: true
        }))
        .pipe(gulp.dest(config.ImgDist));
});

/**
 *
 * Copy of the Images Folder
 *
 * */
gulp.task('copyImage', function(){
    return gulp.src(config.ImageSrc)
        .pipe($.imagemin({
            optimizationLevel: 3,
            progessive: true,
            interlaced: true
        }))
        .pipe(gulp.dest(config.ImageDist));
});

/**
 *
 * Copy of the requirejs file
 *
 * */
gulp.task('copyRequire', function(){
    return gulp.src('bower_components/requirejs/require.js')
        .pipe($.rename({dirname: ''}))
        .pipe(gulp.dest(config.dist+'/js'));
});

/**
 *
 * Generate the injection of modules in the application
 *
 * */
gulp.task('ngAnnotate', function () {
    return gulp.src('app/**/**/*.js')
        .pipe($.ngAnnotate())
        .pipe(gulp.dest(config.dist+'/tmp/app'));
});

/**
 *
 * Optimize the importation of the application 'Js Files
 *
 * */
gulp.task('requirejsOptimize', function () {
    return gulp.src('dist/tmp/main.js')
        .pipe($.requirejsOptimize())
        .pipe(gulp.dest(config.dist));
});

/**
 *
 * Clean the tmp folder
 *
 * */
gulp.task('clean', function () {
    return gulp.src(config.dist+'/tmp', {read: false})
        .pipe($.clean());
});

/**
 *
 * Clean the Dist folder
 *
 * */
gulp.task('cleanDist', function () {
    return gulp.src(config.dist, {read: false})
        .pipe($.clean());
});

/**
 *
 * template caching
 *
 * */
gulp.task('templatecache', function() {
    return gulp
        .src(config.htmltemplates)
        .pipe($.minifyHtml({empty: true}))
        .pipe($.angularTemplatecache(
            config.templateCache.file,
            config.templateCache.options
        ))
        .pipe(gulp.dest(config.dist+'/js'));
});


/**
 * handle js and css import in index.html (from bower.json)
 *
 * */
gulp.task('wiredep', function()
{
    var options= config.WiredepDefaultOptions();
    var wiredep = require('wiredep').stream;
    return gulp.src(config.indexBase)    // Prend en entrée les fichiers *.src.js
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.js)))
        .pipe($.rename({basename: config.index}))
        .pipe(gulp.dest(config.dist));
});


/**
 * Concatenate all the JS in one Js file and all the CSS in one CSS file
 *
 * */
gulp.task('optimize', function() {

    var assets = $.useref.assets({searchPath: './'});
    var templateCache = config.dist+'/js/' + config.templateCache.file;

    return gulp
        .src(config.dist +'/' +config.index+'.html')
        .pipe(assets)
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.inject(
            gulp.src(templateCache, {read: false}), {
                starttag: '<!-- inject:templates:js -->',
                addRootSlash: false,
                ignorePath: 'dist/'

            }))
        .pipe($.replaceTask({
            patterns: [
                {
                    match: /pathOfRequireJS/g,
                    replacement: "js/require.js"
                }
            ]
        }))
        .pipe(gulp.dest(config.dist));
});

/**
 * Inject the module templates in coreModule
 *
 * */
gulp.task('injectModule',function(){

    return gulp
        .src('app/core/core.module.js')
        .pipe($.replaceTask({
            patterns: [
                {
                    match: /AddModule/g,
                    replacement: "\n'templates',"
                }
            ]
        }))
        .pipe(gulp.dest(config.dist+'/tmp/app/core/'));
});
/**
 * Minificaiton of the extern JS
 *
 * */
gulp.task('uglify',['cssOptimise','htmlMinification'],function(){

    return gulp
        .src(config.dist+'/js/*')
        .pipe($.uglify())
        .pipe(gulp.dest(config.dist+'/js/'));
});

/**
 *  Task of the Dev Mode
 *
 * */
gulp.task('dev', function()
{
    var options= config.WiredepDefaultOptions();
    var wiredep = require('wiredep').stream;
    return gulp.src(config.indexBase)    // Prend en entrée les fichiers *.src.js
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.js)))
        .pipe($.replaceTask({
            patterns: [
                {
                    match: /pathOfRequireJS/g,
                    replacement: "bower_components/requirejs/require.js"
                }
            ]
        }))
        .pipe($.rename({dirname: '',basename: config.index}))
        .pipe(gulp.dest('.'));
});

/**
 * Optimise CSS file
 *
 * */
gulp.task('cssOptimise',function(){

    return gulp
        .src([config.dist+'/css/app.css'])
        .pipe($.csso())
        .pipe(gulp.dest(config.dist+'/css'));
});
/**
 *Minify the index.html for the prod env
 *
 * */
gulp.task('htmlMinification', function() {
    return gulp
        .src(config.dist +'/' +config.index+'.html')
        .pipe($.htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(config.dist));
});