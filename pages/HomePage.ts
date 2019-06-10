import { browser, by, element, ExpectedConditions, protractor } from 'protractor';
import { BasePage, IdentificationType } from './BasePage';

const Locators = {
    loginEmail: {
        type: IdentificationType[IdentificationType.Id],
        value: 'email'
    },

    loginPwd: {
        type: IdentificationType[IdentificationType.Id],
        value: 'passwd'
    },

    loginButton: {
        type: IdentificationType[IdentificationType.Id],
        value: 'SubmitLogin'
    }
}

export class HomePage extends BasePage{

var signInButton = element(by.xpath('//a[@title="Log in to your customer account"]'));
var contactUs = element(by.id('contact-link'));
var searchInput = element(by.id("search_query_top"));
var shoppingCart = element(by.xpath('//a[@title="View my shopping cart"]'));
var menuLink = element(by.css('.ul.menu-content'));
var websiteTitle = element(by.id('header_logo'));
var authentication = element(by.css('span.navigation_page'));
var loginForm = element(by.id('login_form'));
const loginEmail = element(by.id('email'));
const loginPwd = element(by.id('passwd'));
const loginButton = element(by.id('SubmitLogin'));


}