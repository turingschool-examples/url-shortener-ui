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
    cy.get('.title')
    cy.get('.long-url')
    cy.get('.submit-btn')
  })

  it('Should be able to fill out the form, and the information is reflected in the input fields', () => {
    cy.get('.title').type('Got places to be').should('have.value', 'Got places to be')
    cy.get('.long-url').type('https://images.unsplash.com/photo-1686276665537-8504356174ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60').should('have.value', 'https://images.unsplash.com/photo-1686276665537-8504356174ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')
    
  })
})