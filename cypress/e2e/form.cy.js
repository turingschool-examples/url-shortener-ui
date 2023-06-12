{describe('Form funcationality', () => {
  beforeEach(() => {
  cy.fixture('./urls').then((data) => {
  cy.intercept('GET', `http://localhost:3001/api/v1/urls`, {
    statusCode: 200,
    body: data
    })
  });
  cy.visit('http://localhost:3000/');
  });
  
    it.skip('Users should be able to see two form fields', () => {
      cy.get('.title-field').should('be.visible')
        .get('input').should('not.have.value');
      cy.get('.url-field').should('be.visible')
        .get('input').should('not.have.value');
    });

    it.skip('Users should be able to edit form field', () => {
      cy.get('.title-field').click().should('have.focus').type("picture of ABBA");
      cy.get('.title-field').should('have.value', "picture of ABBA");
      cy.get('.url-field').click().should('have.focus').type("https://people.com/thmb/bMNo1EeGSofp_egNKnhRgtBzN0c=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x299:751x301):format(webp)/abba-1-7d1381d906e742feab928cca90a9bf7e.jpg");
      cy.get('.url-field').should('have.value', "https://people.com/thmb/bMNo1EeGSofp_egNKnhRgtBzN0c=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x299:751x301):format(webp)/abba-1-7d1381d906e742feab928cca90a9bf7e.jpg");
    });
  });
}
  