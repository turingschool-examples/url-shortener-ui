describe("landing Page", () => {
  beforeEach(() => {
    cy.fixture("sampleUrlData.json").then((urls) => {
      cy.intercept("GET", "http://localhost:3001/api/v1/urls", urls).as("urls");
    });
    cy.visit("http://localhost:3000/");
  });
  it("Should see page title and the existing shortened url titles and shorted url", () => {
    cy.contains("URL Shortener");
    cy.contains("Awesome photo");
    cy.contains("http://localhost:3001/useshorturl/1");
    cy.contains("https://images.unsplash.com/photo-1531898418865-480b7090470f");
  });
  it("Should have inputs for title and url", () => {
    cy.get("form").should("exist");
    cy.get('[placeholder="Title..."]').should("exist");
    cy.get('[placeholder="URL to Shorten..."]').should("exist");
    cy.get("button").should("exist");
  });
  it("Should be able to fill out the form and return what was entered", () => {
    cy.get('[placeholder="Title..."]').type("Please Work");
    cy.get('[placeholder="Title..."]').should("have.value", "Please Work");
    cy.get('[placeholder="URL to Shorten..."]').type(
      "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    );
    cy.get('[placeholder="URL to Shorten..."]').should(
      "have.value",
      "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    );
  });
});
