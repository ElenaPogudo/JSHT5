'use strict'
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    spec_dir: "Jasmine",
    specs: 'spec.js',
    multiCapabilities:[{
        browserName: 'chrome'
    }],

    onPrepare: function () {
        browser.driver.manage().window().maximize();
    },

    jasmineNodeOpts: {
        showColors: true
    }
}