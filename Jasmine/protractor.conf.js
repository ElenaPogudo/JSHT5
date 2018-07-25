'use strict';

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

    onPrepare: function () {
        browser.driver.manage().window().maximize();
        browser.driver.manage().timeouts().implicitlyWait(200000);
        browser.waitForAngularEnabled(true);
    },

    jasmineNodeOpts: {
        showColors: true
    }
};