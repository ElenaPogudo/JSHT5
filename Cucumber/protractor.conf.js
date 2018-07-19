'use strict'

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],


    onPrepare: function () {
        browser.driver.manage().window().maximize();
    },



    jasmineNodeOpts: {
        showColors: true
    }
}