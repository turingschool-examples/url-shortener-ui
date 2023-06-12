{describe('Homepage funcationality', () => {
  beforeEach(() => {
  cy.fixture('./urls').then((data) => {
  cy.intercept('GET', `http://localhost:3001/api/v1/urls`, {
    statusCode: 200,
    body: data
    })
  });
  cy.visit('http://localhost:3000/');
  });
  
    it.skip('Users should be able to see the page title', () => {
      cy.get('.page-title').contains("URL Shortener");
    });

    it.skip('Users should be able to see existing shortened URLs', () => {
      cy.get('.url').eq(0).contains("Awesome photo")
        .get("a").eq(0).should("have.attr", "href", "http://localhost:3001/useshorturl/1")
        .get('.long-url').eq(0).contains("https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80");
      cy.get('.url').eq(1).contains("how many rats are there")
        .get("a").eq(1).should("have.attr", "href", "http://localhost:3001/useshorturl/2")
        .get('.long-url').eq(1).contains("https://www.google.com/search?q=how+many+rats+are+there+in+the+world&oq=how+many+rats+are+there+in+the+world&aqs=chrome.0.0i512j0i22i30l9.3317j0j7&sourceid=chrome&ie=UTF-8");
      cy.get('.url').eq(2).contains("click here for an extremely interesting fact")
        .get("a").eq(2).should("have.attr", "href", "http://localhost:3001/useshorturl/3")
        .get('.long-url').eq(2).contains("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    });
  });
}
  