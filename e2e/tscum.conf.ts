import { Config, browser } from 'protractor';
import { CucumberReportExtension } from './test/reporting/CucumberReportExtension';
const jsonReports = process.cwd() + '/reports/json';

export let config: Config = {


    directConnect:true,
    SELENIUM_PROMISE_MANAGER: false,

    specs: ['./test/SanityTest.feature'],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: 'http://localhost:8808/',
    // suites: {
    //     "homepage": "../features/Home.feature",
    //     "coursedetails" : "../features/CourseDetails.feature"
    // },

    onPrepare: () => {
        //browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        CucumberReportExtension.CreateReportFile(jsonReports);
    },

    cucumberOpts: {
        compiler: 'ts:ts-node/register',
        strict: true,
        // format: ['pretty'],
        format: 'json', //:./reports/json/cucumber_report.json",
        require: ['./test/tsSteps/step_def.js', '../hooks/*.js'],
        tags: '@smoke or @regression'
    },

    onComplete: () => {
        CucumberReportExtension.GenerateCucumberReport();
    },
};