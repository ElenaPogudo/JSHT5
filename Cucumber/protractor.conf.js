'use strict';


exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    strict: true,
    resultJsonOutputFile: 'Cucumber/reports/report.json',
    framework: 'custom',
    frameworkPath: '../node_modules/protractor-cucumber-framework/',
    cucumberOpts: {
        require: ['../Cucumber/features/step_definitions/chairs_steps.js'],
        format: 'summary'
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
        browser.waitForAngularEnabled(true);
    // },
    // onCleanUp: function () {
    //     const reporter = require('cucumber-html-reporter');
    //     const options = {
    //         theme: 'bootstrap',
    //         jsonFile: 'Cucumber/reports/report.json',
    //         output: 'Cucumber/reports/cucumber_report.html',
    //         reportSuiteAsScenarios: true,
    //         launchReport: true
    //     };
    //     reporter.generate(options);
    //

    }
};
