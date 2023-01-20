import Login from "../../fixtures/pom/login/login.page";
import Credentials from "../../fixtures/data/credentials.json";

describe("Login", () => {
    beforeEach(() => {
      cy.visit("/account/login");
    });

    it("Should login as User", () => {
        Login.login(Credentials.userEmail, Credentials.userPassword);
        
        // cy.contains('Profile').should("be.visible");
        // LoginPage.buttonHamburgerMenu.click();
        // cy.contains("role: admin, realtor").should("be.visible");
      });
  
  });