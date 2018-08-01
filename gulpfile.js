'use strict';

const logger = require('./Cucumber/logger').logger;

const gulp = require('gulp');
const protractor = require('gulp-protractor').protractor;
const runSequence = require('run-sequence').use(gulp);
const shell = require('gulp-shell');

gulp.task('eslint', () => {
    logger.info('Checking and fixing code by eslinter');
    return gulp.src('*.js', {read: false})
        .pipe(shell([
            'eslint ./ --fix'
        ]));
});

gulp.task('start-webdriver', (done) => {
    logger.info('Starting webdriver');
    gulp.src('*.js', {read: false})
        .pipe(shell([
            'start cmd /k "node_modules\\.bin\\webdriver-manager start"'
        ]));
    setTimeout(() => {
        done();
    }, 7000);
});

gulp.task('run-cucumber-test', () => {
    logger.info('Running tests');
    return gulp.src('./Cucumber/features/*.feature')
        .pipe(protractor({
            configFile: './Cucumber/protractor.conf.js'
        }))
        .on('error', (err) => {
            logger.error('Error, Tests Failed!', err);
            runSequence('generate-report');
        });
});

gulp.task('run-jasmine-test', () => {
    logger.info('Running tests');
    return gulp.src('./Jasmine/spec.js')
        .pipe(protractor({
            configFile: './Jasmine/protractor.conf.js'
        }))
        .on('error', (err) => {
            logger.error('Error, Tests Failed!', err);
            runSequence('generate-report');
        });
});

gulp.task('test', () => {
    runSequence('start-webdriver', 'run-cucumber-test', 'run-jasmine-test');
});