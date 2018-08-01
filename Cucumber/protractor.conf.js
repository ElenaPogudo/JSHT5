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
        browserName: 'chrome',
        chromeOptions: {
            args: ['disable-infobars']
        }
    },
    onPrepare: function () {
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(true);
    },
    onCleanUp: function () {
        const reporter = require("simple-cucumber-html-reporter");
        reporter.generate({
            disableLog: true,
            jsonDir: "Cucumber/reports/",
            reportPath: "Cucumber/reports/",
            metadata: {
                browser: {
                    name: "chrome",
                    version: "67"
                },
                device: "Local test machine",
                platform: {
                    name: "windows",
                    version: "win10"
                }
            }
        });
    }
};
