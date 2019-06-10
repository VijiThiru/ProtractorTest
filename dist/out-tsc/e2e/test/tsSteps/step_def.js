const { Given, When, Then } = require('cucumber');
import { browser } from 'protractor';
Given(/^I launch the application$/, function name(callback) {
    browser.get(browser.baseUrl);
});
//# sourceMappingURL=step_def.js.map