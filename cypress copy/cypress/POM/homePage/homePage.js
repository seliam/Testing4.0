import { locators } from "../locators/locators";

class HomePage {
    elements = {
        button: () => cy.get('[data-label="or"] > a'),
    }

    navigateToLoginPage() {
       this.elements.button().click({force: true});
    }
}

export const homePage = new HomePage();
