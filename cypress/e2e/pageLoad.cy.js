
//When a user visits the page, they can view the page title, form and the existing shortened URLs
describe('pageload', () => {
  beforeEach(()=>{
    cy.intercept({ method: 'GET',
     url: 'http://localhost:3001/api/v1/urls'
  }, { fixture: 'urls.json' }).as('getUrls');
  })
  it('should display page title, form and the existing shortened URLs', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h1').contains('URL Shortener')
    cy.get('button').contains('Shorten Please!')
    cy.get('.num1').contains('Awesome photo')
    cy.get('.num1').contains('http://localhost:3001/useshorturl/1')
    cy.get('.url').contains('beautiful soul')
    cy.get('.url').contains('http://localhost:3001/useshorturl/12')
  })
})