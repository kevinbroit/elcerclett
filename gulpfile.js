const gulp = require('gulp');
var Dgeni = require('dgeni');


gulp.task('dgeni', function() {
    var dgeni = new Dgeni([require('./docs/config')]);
    return dgeni.generate();
});
