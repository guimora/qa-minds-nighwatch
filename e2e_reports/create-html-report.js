var reporter = require('cucumber-html-reporter')

var options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber.json',
    output: 'e2e_reports/cucumber_report.html',
    launchReport: true,
    screenshotsDirectory: 'reports/screenshots/',
    storeScreenshots: true
};

reporter.generate(options);