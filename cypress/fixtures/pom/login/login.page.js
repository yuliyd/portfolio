class Login {
    // get inputEmail() {return cy.get('[name="email"]')}
    get inputEmail() {return cy.contains('Email')}
    // get inputPassword() {return cy.get('[name="password"]')}
    get inputPassword() {return cy.contains('Password')}
    get buttonSubmit() {return cy.get('[value="Sign In"]')} 
    
    get lableErrorAlert() {return cy.get('[role="alert"]')}
    get textProfile() {return cy.contains("Profile")}
    get buttonHamburgerMenu() {return cy.get(".MuiBox-root .MuiIconButton-root").eq(0)}
    get managementSection() {return cy.get('.simplebar-content')}

    login(email, password) {
        this.inputEmail.type(email)
        this.inputPassword.type(password)
        this.buttonSubmit.click()
    }
}

export default new Login()