 

import { homePage } from '../POM/homePage/homePage';
import { loginPage } from '../POM/loginPage/loginPage';
import { secureAreaPage } from '../POM/secureAreaPage/secureAreaPage';
import {assertionMessages} from '../POM/Assertions/assertions';
import testParams from '../testData/testparams.json';

describe('Login Tests', () => {
    beforeEach(() => {
        cy.viewport(1800, 1000);
        cy.visit('/');
    })


    it('testSuccessfulLogin', () => {
        homePage.navigateToLoginPage();
        loginPage.setEmail("selia_mardirosi@edu.aua.am");
        loginPage.setPassword("SuperSecretpass$");
        secureAreaPage.getAlertText().should('not.exist');
    });

    it('createAccount', () => {
        homePage.navigateToLoginPage();
        loginPage.createAccountButton();
        secureAreaPage.elements.base().should('be.visible');
    });

    it('forgotPassword', () => {
        homePage.navigateToLoginPage();
        loginPage.forgotPassword();
        loginPage.setEmail2("selia_mardirosi@edu.aua.am");
        secureAreaPage.elements.base().should('be visible');
    });

    it('wrongTest1', () => {
        homePage.navigateToLoginPage();
        loginPage.setEmail("selia_mardirosi@edu.aua.am");
        loginPage.setPassword("SuperSecretpass");
        //secureAreaPage.clickLoginButton();
        cy.url().should('not.equal', "https://www.krcs.co.uk/customer/account/");
    });

    it('wrongTest2', () => {
        homePage.navigateToLoginPage();
        loginPage.setEmail("seliamardirosi@gmail.com");
        loginPage.setPassword("SuperSecretpass$");
        //secureAreaPage.clickLoginButton();
        cy.url().should('not.equal', "https://www.krcs.co.uk/customer/account/");
    });
});