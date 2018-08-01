const reporter = require('cucumber-html-reporter');
const path = require('path');
const options = {
    theme: 'bootstrap',
    jsonFile: 'Cucumber/reports/report.json',
    output: 'Cucumber/reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true
};

reporter.generate(options);