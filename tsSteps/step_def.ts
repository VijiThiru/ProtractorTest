const { Given, When, Then } = require('cucumber');
import { expect} from 'chai';
import { browser, by } from 'protractor';
import { Authentication } from '../pages/AuthenticationPage';
import { HomePage } from '../pages/HomePage';
import { expect, assert } from 'chai'
var authenticationPage = new AuthenticationPage();
var homePage = new HomePage();

Given(/^I launch the browser and pass the url$/, function name(callback) {
    browser.get(browser.baseUrl);
    callback();
});

When(/^I landed on HomePage$/, function name(callback) {
    //authenticationPage.ExisitingUserSignIn();
    callback();
});

Then(/^I verify HomePage elements$/, function name(callback) {
    browser.get(browser.baseUrl);
    callback();
});

When(/^I click on SignIn button$/, function name(callback) {
    element(by.className('login')).click();
    authenticationPage.ExisitingUserSignIn();
    callback();
});
