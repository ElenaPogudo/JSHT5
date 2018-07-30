const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    output: 'report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
};

reporter.generate(options);