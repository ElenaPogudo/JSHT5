'use strict';

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    highlightDelay: 3000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: 'Cucumber/features/step_definitions/chairs_steps.js',
    },
    specs: ['Cucumber/features/chairs.feature'],
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['disable-infobars']
        }
    },
    onPrepare: function () {
        browser.driver.manage().window().maximize();
        browser.driver.manage().timeouts().implicitlyWait(20000);
        browser.waitForAngularEnabled(true);
    }
}