import * as fs from 'fs';
import { mkdirp } from 'mkdirp';
import * as report from 'cucumber-html-reporter';
const Cucumber = require('cucumber');
export class CucumberReportExtension {
    static CreateReportFile(dirName) {
        //Check of the directory exist
        if (!fs.existsSync(dirName)) {
            mkdirp.sync(dirName);
        }
    }
    static GenerateCucumberReport() {
        report.generate(this.cucumberReporterOptions);
    }
}
CucumberReportExtension.jsonDir = process.cwd() + '/reports/json';
CucumberReportExtension.htmlDir = process.cwd() + '/reports/html';
CucumberReportExtension.jsonFile = CucumberReportExtension.jsonDir + '/cucumber_report.json';
CucumberReportExtension.cucumberReporterOptions = {
    theme: 'bootstrap',
    jsonFile: CucumberReportExtension.jsonFile,
    output: CucumberReportExtension.htmlDir + '/cucumber_reporter.html',
    reportSuiteAsScenarios: true,
    metadata: {
        "App Version": "0.0.1",
        "Test Environment": "Testing",
        "Browser": "Chrome  74.0.0",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Local"
    }
};
//# sourceMappingURL=CucumberReportExtension.js.map