

import { locators } from '../locators/locators';



class SecureAreaPage {
    elements = {
        statusAlert: () => cy.get(locators.statusAlert),
        base: () => cy.get(locators.base),
        resetButton: () => cy.get(locators.resetButton)
    }

    getAlertText() {
        return this.elements.statusAlert().invoke('text');
    }
}

export const secureAreaPage = new SecureAreaPage();
