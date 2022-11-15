describe('Landing Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      ok: true,
      fixture: 'urls.json'
    });

    cy.visit('http://localhost:3000/');
  })

  it('Should show the page title', () => {
    cy.get('h1').should('be.visible').should('contain', 'URL Shortener')
  })

  it('Should render existing shortened urls', () => {
    cy.get('section')
      .get('.url').should('have.length', '1')
      .first().should('be.visible')
      .get('h3').should('contain', 'Awesome photo')
      .get('a').should('contain', 'http://localhost:3001/useshorturl/1')
  })

  it('Should render a form with the proper inputs', () => {
    cy.get('form').should('be.visible')
      .get('input[name=title]').should('exist').should('be.visible')
      .get('input[name=urlToShorten]').should('exist').should('be.visible')
      .get('button').should('exist').should('be.visible')
  })

  it('Should render the users inputs in the forms input fields', () => {
    cy.get('form')
      .get('input[name=title]').type('Cool Photo')
      .get('input[name=urlToShorten]').type('http://www.hellomonkeyman.com/how-are-you')
    
    cy.get('form')
      .get('input[name=title]')
      .should('have.value', 'Cool Photo')

    cy.get('form')
      .get('input[name=urlToShorten]')
      .should('have.value', 'http://www.hellomonkeyman.com/how-are-you')
  })

  it('Should render the new shortened url after a successful post', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      statusCode: 201,
      ok: true,
      body: {
        "id": 2,
        long_url: 'http://www.hellomonkeyman.com/how-are-you',
        short_url: 'http://localhost:3001/useshorturl/2',
        title: 'Cool Photo'
      }
    })
    
    cy.get('form')
      .get('input[name=title]').type('Cool Photo')
      .get('input[name=urlToShorten]').type('http://www.hellomonkeyman.com/how-are-you')
      .get('button').click()

    cy.get('.post-message').should('contain', 'Success')

    cy.get('section')
      .get('.url').should('have.length', '2')
      .eq(2).should('be.visible')
      .get('h3').should('contain', 'Cool Photo')
      .get('a').should('contain', 'http://localhost:3001/useshorturl/2')
  })
})