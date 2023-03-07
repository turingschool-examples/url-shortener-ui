describe("post page", () => {
    beforeEach(() => {
        cy.intercept("GET", "http://localhost:3001/api/v1/urls", {
          fixture: "sampleUrlData.json",
        }).as("urls");
        cy.intercept("POST", "http://localhost:3001/api/v1/urls", {
          fixture: "samplePostUrlData.json",
        }).as("POSTUrl");
        cy.visit("http://localhost:3000/");
      });
    
      it("should submit the form and display the new shortened URL to the DOM", () => {
        cy.get('[placeholder="Title..."]').type("For the love of god, just work")
          .should("have.value", "For the love of god, just work");
        cy.get('[placeholder="URL to Shorten..."]').type(
          "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        )
          .should(
            "have.value",
            "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
          );
        cy.get("button").first().click();
        cy.get("section > :nth-child(2)").should("be.visible")
        cy.get(":nth-child(2) > h3").contains("For the love of god, just work");
        cy.get(":nth-child(2) > a").contains("http://localhost:3001/useshorturl/2");
        cy.get(":nth-child(2) > p").contains(
          "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        );
      });
    });