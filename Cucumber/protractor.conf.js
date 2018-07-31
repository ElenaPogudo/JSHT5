'use strict';

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    highlightDelay: 1000,
    strict: true,
    resultJsonOutputFile: 'Cucumber/reports/report.json',
    framework: 'custom',
    frameworkPath: '../node_modules/protractor-cucumber-framework/',
    cucumberOpts: {
        require: ['../Cucumber/features/step_definitions/chairs_steps.js'],
        format: "summary"
},
    specs: ['../Cucumber/features/chairs.feature'],
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['disable-infobars']
        }
    },
    onPrepare: function () {
        browser.driver.manage().window().maximize();
        browser.driver.manage().timeouts().implicitlyWait(1000);
        browser.waitForAngularEnabled(true);
    }
};
