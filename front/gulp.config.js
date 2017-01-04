module.exports = function() {
    var config = {

        // all js to hint
        alljs: [
            './app/**/*.js',
            './*.js'
        ],
        indexBase : 'index-base.html',
        index : 'index',
        js : '**/*.js',
        dist : 'dist',
        /**
         * bower and npm locations
         */
        bower : {
            json : require('./bower.json'),
            directory : './bower_components/',
            ignorePath: 'bower_components/requirejs/'

        },
        /**
         *path to html files
         */
        htmltemplates : ['app/**/views/**/*.html','app/**/directives/**/*.html'],

        templateCache : {
            file: 'templates.js',
            options: {
                module: 'templates',
                standalone: true,
                root: 'app/'
            }
        },
        fontSRC : 'assets/css/**/**/font/*.*',
        fontsSRC : 'assets/css/**/**/fonts/*.*',
        fontDist : 'dist/css/font/',
        fontsDist : 'dist/css/fonts/',
        ImageSrc : ['assets/images/**/*.*','assets/images/**/**/*.*'],
        ImageDist: 'dist/assets/images/',
        imgSrc : ['assets/img/*.*'],
        ImgDist: 'dist/assets/img/',
    };
    config.WiredepDefaultOptions = function ()
    {

        var options = {
            bowerJson : config.bower.json,
            directory : config.bower.directory,
            ignorePath : config.bower.ignorePath,
            exclude : 'bower_components/requirejs/require.js',
        }
        return options;
    }

    return config;
};