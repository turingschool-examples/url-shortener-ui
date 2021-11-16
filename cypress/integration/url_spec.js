Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Shortened URLs View', () => {

  const url = {
    id: 2, long_url: "https://hddesktopwallpapers.in/wp-content/uploads/2015/09/switzerland-images.jpg", short_url: "http://localhost:3001/useshorturl/2", title: 'Awesome photo'
  };

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should be able to view any existing page titles/urls', () => {
    cy.intercept('http://localhost:3001/api/v1/urls', {
      url
    });

    cy.get('.url>h3')
      .should('contain', 'Awesome photo')

    cy.get('.url>a')
      .should('contain', 'http://localhost:3001/useshorturl/2')
  });

  it('should be able to see a form with the inputs of \'title\' and \'URL to shorten\'', () => {
    cy.get('form>#inputTitle')
      .should('be.visible')
      .and('not.be.disabled')

    cy.get('form>#inputUrl')
      .should('be.visible')
      .and('not.be.disabled')
  });

  it('should be able to enter data into inputs and see that data reflected in the corresponding input field', () => {
    cy.get('form>#inputTitle')
      .type('My Title')

    cy.get('form>#inputTitle')
      .should('have.text', 'My Title')
  });
});

describe('POSTing new URL', () => {

  const body = {
    long_url: "https://hddesktopwallpapers.in/wp-content/uploads/2015/09/switzerland-images.jpg", title: "Luvlee Dai"
  };

  it('should display a user-submitted URL after one is submitted', () => {
    cy.visit('http://localhost:3000')

    cy.get('form>#inputTitle')
      .type('Luvlee Dai')

    cy.get('form>#inputUrl')
      .type('https://hddesktopwallpapers.in/wp-content/uploads/2015/09/switzerland-images.jpg')

    cy.get('#submitButton')
      .click()

    cy.intercept('http://localhost:3001/api/v1/urls', {
      body
    });

    cy.get('.url')
      .should('exist')

    cy.get('.url')
      .should('contain', 'http://localhost:3001/useshorturl/2')
  });

});
