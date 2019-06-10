import { browser, by, element } from 'protractor';
export class AppPage {
    navigateTo() {
        console.log('Entering the url:');
        return browser.get(browser.baseUrl);
    }
    getTitleText() {
        return element(by.tagName('title')).getText();
    }
}
//# sourceMappingURL=app.po.js.map