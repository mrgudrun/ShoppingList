﻿/// <binding BeforeBuild='bower' AfterBuild='build' Clean='clean' />
'use strict';

var gulp = require('gulp');

gulp.paths = {
    src: 'src',
    dist: 'wwwroot',
    tmp: '.tmp',
    e2e: 'e2e'
};

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});