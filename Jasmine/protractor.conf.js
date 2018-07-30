'use strict';
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: 'spec.js',
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['disable-infobars']
        }
    },
    highlightDelay: 3000,

    onPrepare: () => {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: './reports',
                takeScreenshotsOnlyOnFailures: true
            })
        );
        browser.driver.manage().window().maximize();
        browser.driver.manage().timeouts().implicitlyWait(200000);
        browser.waitForAngularEnabled(true);
    },

    jasmineNodeOpts: {
        print: () => { }
    }
};
