describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/urls', {
      status: 200,
      fixture: 'example.json'
    })
    cy.visit('http://localhost:3000/')
  })
  
  it.skip('Should display page title and the existing shortened URLs', () => {
    cy.get('h1').contains('URL Shortener')
    cy.get('div[class=url]').should('have.length', 3)
    cy.get('h3').contains('The coolest photo')
  })

  it.skip('Should be able to view the Form all neccessary inputs', () => {
    cy.get('')
  })

  it.skip('Should be able to fill out the form, and the information is reflected in the input fields')
})