describe('errors', () => {
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
  it('should show message for user to fill out all input fields', () =>{
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      body: {
        title: 'Ahhh',
      }
    })
    cy.get('input[name="title"]').type('Ahhh').should('have.value', 'Ahhh')
    .get('button').click()
    cy.get('body').should('contain', 'p', 'Please fill out all input fields')
    .get('input[name="long_url"]').type('h')
    cy.get('Please fill out all input fields').should('not.exist')
  })
})