// cypress/support/PageObjects/loginPage.js

class LoginPage {
    get login() {
        return cy.get('#login2'); // Selector for the login link/button
    }

    get usernameField() {
        return cy.get('#loginusername'); // Selector for the username input field
    }

    get passwordField() {
        return cy.get('#loginpassword'); // Selector for the password input field
    }

    get loginButton() {
        return cy.get(`[onclick="logIn()"]`); // Selector for the login button
    }

    visit() {
        cy.visit('/login'); // Adjust the URL as needed
    }

    enterUsername(username) {
        this.usernameField.type(username); // Type the username into the username field
    }

    enterPassword(password) {
        this.passwordField.type(password); // Type the password into the password field
    }

    clickLogin() {
        this.loginButton.click(); // Click the login button
    }

    clickLoginLink() {
        this.login.click(); // Click the login link/button to open the login modal or page
    }
}

export default new LoginPage();