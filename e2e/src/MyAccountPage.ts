import { browser, by, element, ExpectedConditions, protractor } from 'protractor';
import { BasePage, IdentificationType } from './BasePage';

const Locators = {
    myAccountFeatures: {
        type: IdentificationType[IdentificationType.ClassName],
        value: 'myaccount-link-list'
    },

    categoriesContainer: {
        type: IdentificationType[IdentificationType.Id],
        value: 'block_top_menu'
    },
}

export class MyAccountPage extends BasePage{
}
