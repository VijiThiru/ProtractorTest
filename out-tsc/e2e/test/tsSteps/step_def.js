"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('cucumber'), Given = _a.Given, When = _a.When, Then = _a.Then;
var protractor_1 = require("protractor");
Given(/^I launch the application$/, function name(callback) {
    protractor_1.browser.get(protractor_1.browser.baseUrl);
});
//# sourceMappingURL=step_def.js.map