const { Given, When, Then } = require('cucumber');
import { expect} from 'chai';
import { browser, by } from 'protractor';

Given(/^I launch the application$/, function name(callback) {
    browser.get(browser.baseUrl);
});
