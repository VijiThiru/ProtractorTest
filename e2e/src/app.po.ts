import { browser, by, element, ExpectedConditions, protractor } from 'protractor';

export class AppPage {
  navigateTo() {
    console.log('Entering the url:');
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.tagName('title')).getText() as Promise<string>;
  }

  waitForElementtoVisible(element) {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(element), 30000);
  }

  clearElement(element) {
    element.clear();
  }
}
