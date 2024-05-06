// cypress/e2e/login_page.cy.js

import { loginPageLocators } from "./loginPageLocators";

class LoginPage {
    elements = {
        emailField: () => cy.get(loginPageLocators.emailField),
        passwordField: () => cy.get(loginPageLocators.passwordField),
        email2Field: () => cy.get(loginPageLocators.email2Field),
        loginButton: () => cy.get(loginPageLocators.loginButton).filter(':visible'),
        createButton: () => cy.get(loginPageLocators.createButton),
        forgotButton: () => cy.get(loginPageLocators.forgotButton)
    }

    setEmail(email) {
        this.elements.emailField().type(email);
    }

    setPassword(password) {
        this.elements.passwordField().type(password);
    }

    setEmail2(email2) {
        this.elements.email2Field().type(email2);
    }

    clickLoginButton() {
        this.elements.loginButton().click();
    }

    createAccountButton() {
        this.elements.createButton().click();
    }

    forgotPassword() {
        this.elements.forgotButton().click();
    }
}

export const loginPage = new LoginPage();
