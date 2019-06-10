"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var CucumberReportExtension_1 = require("./test/reporting/CucumberReportExtension");
var jsonReports = process.cwd() + '/reports/json';
exports.config = {
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,
    specs: ['./test/*.feature'],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: 'http://localhost:8808/',
    // suites: {
    //     "homepage": "../features/Home.feature",
    //     "coursedetails" : "../features/CourseDetails.feature"
    // },
    onPrepare: function () {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.manage().window().maximize();
        CucumberReportExtension_1.CucumberReportExtension.CreateReportFile(jsonReports);
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        // format: ['pretty'],
        format: "json",
        require: ['./test/tsSteps/step_def.js', '../hooks/*.js'],
        tags: '@smoke or @regression'
    },
    onComplete: function () {
        CucumberReportExtension_1.CucumberReportExtension.GenerateCucumberReport();
    },
};
//# sourceMappingURL=tscum.conf.js.map