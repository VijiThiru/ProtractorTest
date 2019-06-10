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
    },

    createAnAccount: {
        type: IdentificationType[IdentificationType.Id],
        value: 'SubmitCreate'
    },

    enterEmailToRegister: {
        type: IdentificationType[IdentificationType.Id],
        value: 'email_create'
    },

}

export class AuthenticationPage extends BasePage {
    [x: string]: any;

    async openBrowser(url: string) {
        await browser.get(url);
    }

    async ExisitingUserSignIn() {
        this.loginEmail.sendKeys('vijiashk@gmail.com');
        this.loginPwd.sendKeys('viji123');
        this.loginButton.click();
    }

    async createNewUSer(){
        this.enterEmailToRegister.sendKeys('ashokrajvg@gmail.com');
        this.createAnAccunt.click();
    }

    async negativeCaseExistingUserSignIn() {
        this.loginEmail.clear();
        this.loginPwd.clear();
        this.loginButton.click();
// tslint:disable-next-line: only-arrow-functions
        element(by.className('alert alert-danger')).element(by.tagName('li')).getText().then(function(errorText: string){
            expect(errorText).toEqual('An email address required.');
        });
    }

}
