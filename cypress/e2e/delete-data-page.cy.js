describe("Delete functionality", () => {
    beforeEach(() => {
      cy.intercept("GET", "http://localhost:3001/api/v1/urls", {
        fixture: "sampleUrlData.json",
      }).as("urls");
      cy.intercept("DELETE", "http://localhost:3001/api/v1/urls/*").as(
        "deleteUrl"
      );
      cy.visit("http://localhost:3000/");
    });
  
    it("Should delete a url when clicking delete button", () => {
      cy.get(".url").should("have.length", 1);
      cy.get(":nth-child(1) > .delete-btn").click();
      cy.get(".url").should("have.length", 0);
    });
  });