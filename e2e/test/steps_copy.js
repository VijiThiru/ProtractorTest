const { Given, When, Then } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;

module.exports = function steps (){

    this.Given('/^I launch the application$/', function (callback) {
        
        console.log("Inside the 1st Given");
        browser.get(url);
      callback();
    });

    this.When('/^I launch the application$/', function (callback) {
        
        var title = element(by.tagName('title')).getText();
        console.log("Title = "+title);
        expect(title.toBe('My Store'));
      callback();
    });

    this.Then('/^I launch the application$/', function (callback) {
        element(by.className('login')).click();
      callback();
    });
}

