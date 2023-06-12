describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/urls', {
      status: 200,
      fixture: 'example.json'
    })
    cy.visit('http://localhost:3000/')
  })
  
  it('Should display page title and the existing shortened URLs', () => {
    cy.get('h1').contains('URL Shortener')
    cy.get('div[class=url]').should('have.length', 3)
    cy.get('h3').contains('The coolest photo')
  })

  it('Should be able to view the Form and all neccessary inputs', () => {
    cy.get('input').should('have.length', 2)
    cy.get('.title')
    cy.get('.long-url')
    cy.get('.submit-btn')
  })

  it('Should be able to fill out the form, and the information is reflected in the input fields', () => {
    cy.get('.title').type('Got places to be').should('have.value', 'Got places to be')
    cy.get('.long-url').type('https://images.unsplash.com/photo-1686276665537-8504356174ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60').should('have.value', 'https://images.unsplash.com/photo-1686276665537-8504356174ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')
  })

  it('Should render a new shortened URL after a form is filled out properly and the submit button is clicked', () => {
    cy.get('.title').type('Got places to be')

    cy.get('.long-url').type('https://images.unsplash.com/photo-1686276665537-8504356174ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')

    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      status: 201,
      body: { 
        id: 4,
        title: 'Got places to be',
        long_url: 'https://images.unsplash.com/photo-1686276665537-8504356174ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        short_url: 'http://localhost:3001/useshorturl/4'
      }
    })

    cy.get('.submit-btn').click()
    cy.scrollTo(0, 500)
    cy.get('h3').eq(3)
      .contains('Got places to be')  
    })
})