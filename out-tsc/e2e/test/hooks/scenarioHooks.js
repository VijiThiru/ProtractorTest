"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _a = require('cucumber'), BeforeAll = _a.BeforeAll, Before = _a.Before, After = _a.After, AfterAll = _a.AfterAll, Status = _a.Status, setDefaultTimeout = _a.setDefaultTimeout;
var protractor_1 = require("protractor");
var CucumberReportExtension_1 = require("../reporting/CucumberReportExtension");
var jsonReports = process.cwd() + '/reports/json';
setDefaultTimeout(10000);
BeforeAll(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        CucumberReportExtension_1.CucumberReportExtension.CreateReportFile(jsonReports);
        return [2 /*return*/];
    });
}); });
After(function (scenario) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var screenShot;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(scenario.result.status === Status.FAILED)) return [3 /*break*/, 2];
                    return [4 /*yield*/, protractor_1.browser.takeScreenshot()];
                case 1:
                    screenShot = _a.sent();
                    this.attach(screenShot, 'image/png');
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
});
//# sourceMappingURL=scenarioHooks.js.map