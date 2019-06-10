'use strict'
const { Given, When, Then } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;

var steps = function () {

    Given('/^I launch the application$/', async (callback) => {
      //browser.ignoreSynchronization(true);
        console.log("Inside the 1st Given");
        await browser.get(url);
      callback();
    });

    When('/^I launch the application$/', function (callback) {
        
        var title = element(by.tagName('title')).getText();
        console.log("Title = "+title);
        expect(title.toBe('My Store'));
      callback();
    });

    Then('/^I launch the application$/', function (callback) {
        element(by.className('login')).click();
      callback();
    });
}

module.exports = steps;