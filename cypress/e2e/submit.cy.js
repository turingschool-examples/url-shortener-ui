describe('Homepage functionality', () => {
  beforeEach(() => {
    cy.fixture('./urls').then((data) => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
        statusCode: 200,
        body: data
      });
    });
    cy.visit('http://localhost:3000/');
  });

  it('Users should be able to submit new URLs to be shortened and see them on the homepage', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      statusCode: 201,
      body: {
        long_url: "https://people.com/thmb/bMNo1EeGSofp_egNKnhRgtBzN0c=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x299:751x301):format(webp)/abba-1-7d1381d906e742feab928cca90a9bf7e.jpg",
        title: "picture of ABBA"
      }
    })
    cy.get('.title-field').click().should('have.focus').type("picture of ABBA");
    cy.get('.url-field').click().should('have.focus').type("https://people.com/thmb/bMNo1EeGSofp_egNKnhRgtBzN0c=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x299:751x301):format(webp)/abba-1-7d1381d906e742feab928cca90a9bf7e.jpg");

    cy.fixture('./postURLs').then((data) => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
        statusCode: 200,
        body: data
      });
    })
    
    cy.get('.shorten-button').click()
      .visit('http://localhost:3000/')
      .get('.url').eq(3)
      .contains("picture of ABBA")
      .get("a").eq(3).should("have.attr", "href", "http://localhost:3001/useshorturl/4")
      .get('.long-url').eq(3).contains("https://people.com/thmb/bMNo1EeGSofp_egNKnhRgtBzN0c=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x299:751x301):format(webp)/abba-1-7d1381d906e742feab928cca90a9bf7e.jpg");
  });
});