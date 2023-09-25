describe('empty spec', () => {
  beforeEach(()=> {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      fixture: 'mainDisplay'
    }).as('main')
    cy.visit('http://localhost:3000/')
  })
  it('should show a 500 level error', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      statusCode: 500
    })
    cy.get('body').contains('p', 'Request failed - 500')
  })
})