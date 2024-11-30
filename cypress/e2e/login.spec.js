import LoginPage from '../support/PageObjects/loginPage';


describe('Login Testcase 1', () => {
    let data;
    beforeEach(() => {
        cy.fixture('login2').then((fixtureData) => {
            data = fixtureData;
            cy.visit('/');
        });
    });


    it('should log in successfully with valid credentials', () => {
        cy.clearCookies(); // Clear cookies
        cy.clearLocalStorage(); // Clear local storage
        LoginPage.clickLoginLink();
        LoginPage.enterUsername(data.Username);
        LoginPage.enterPassword(data.Password);
        LoginPage.clickLogin();

        // Add assertions to verify successful login
        cy.get (`#logout2`).should('be.visible');
    })

});