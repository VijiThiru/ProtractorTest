import * as tslib_1 from "tslib";
const { BeforeAll, Before, After, AfterAll, Status, setDefaultTimeout } = require('cucumber');
import { browser } from 'protractor';
import { CucumberReportExtension } from '../reporting/CucumberReportExtension';
const jsonReports = process.cwd() + '/reports/json';
setDefaultTimeout(10000);
BeforeAll(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
    CucumberReportExtension.CreateReportFile(jsonReports);
}));
After(function (scenario) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === Status.FAILED) {
            // screenShot is a base-64 encoded PNG
            const screenShot = yield browser.takeScreenshot();
            this.attach(screenShot, 'image/png');
        }
    });
});
//# sourceMappingURL=scenarioHooks.js.map