import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

import { callbackify } from 'util';
import { async } from 'q';
import { AuthenticationPage } from './AuthenticationPage';

describe('workspace-project App', () => {
  let page: AppPage;
  let authentication: AuthenticationPage;

  beforeEach(() => {
    page = new AppPage();
    browser.waitForAngularEnabled(false);
  });

  it('should display app title', async() => {
    page.navigateTo();
    browser.manage().window().maximize();
    await browser.manage().timeouts().implicitlyWait(30000);
    var locateTitle = element(by.id('header_logo')).element(by.tagName('a'));
// tslint:disable-next-line: only-arrow-functions
    locateTitle.getAttribute('title').then(function(titleTxt){
      expect(titleTxt).toEqual('My Store');
    });
  });

  it('click on SignIn button and verify createAccount and Login section is present', () => {
    browser.sleep(1000);
// tslint:disable-next-line: only-arrow-functions
    element(by.className('login')).click().then(function(){
      element(by.id('create-account_form')).isDisplayed().then(function(present){
        expect(present).toBe(true);
      })
    });
  });

  it('verify authentication failure : without Entering data in required Fields', async () => {
    browser.sleep(1000);
    //authentication.negativeCaseExistingUserSignIn();
    element(by.id('email')).clear();
    element(by.id('passwd')).clear();
    element(by.id('SubmitLogin')).click();
    page.waitForElementtoVisible(element(by.className('alert alert-danger')));
    element(by.className('alert alert-danger')).element(by.tagName('li')).getText().then(function(errorText: string){
      expect(errorText).toEqual('An email address required.');
    });
    browser.sleep(100);
    element(by.id('email_create')).clear();
    element(by.id('SubmitCreate')).click();
    page.waitForElementtoVisible(element(by.id('create_account_error')));
    element(by.id('create_account_error')).getText().then(function(errorText: string){
      expect('An email address required.').toEqual(errorText);  //on UI it is Invalid email address.
    });
  });

  it('login into the app', async () => {
    browser.sleep(1000);
// tslint:disable-next-line: only-arrow-functions
    //authentication.ExisitingUserSignIn();
    element(by.id('email')).sendKeys('vijiashk@gmail.com');
    element(by.id('passwd')).sendKeys('viji123');
    element(by.id('SubmitLogin')).click();
    page.waitForElementtoVisible(element(by.css('a.account')));
    element(by.css('a.account')).getText().then(function (userName){
      console.log('User Name = ' + userName);
      expect(userName).toEqual('Viji Ashok');
    });
  });

  it('verify MyAccount Section for its avaibale features', async () => {
    browser.sleep(1000);
// tslint:disable-next-line: only-arrow-functions
    //accountsPage.verifyCustomerFeatures();
    var myaccountlist = element.all(by.className('myaccount-link-list'));
    myaccountlist.each(function (elements, index) {
      var firstList = elements.all(by.tagName('li')).each(function (myAccFeature, index) {
        myAccFeature.element(by.tagName('span')).getText().then(function (features){
          console.log("Available features in My Account : "+features);
        });
      });
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
