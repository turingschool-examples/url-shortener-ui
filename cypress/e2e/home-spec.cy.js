describe('Homepage flow', () => {
  describe('Should vist page, and see Title and existing Urls', () => {
    beforeEach(() => {
      cy.intercept("GET", "http://localhost:3001/api/v1/urls", {
        fixture: "fixture.json"
      })
      cy.visit('http://localhost:3000/')
    })
    
  }) 
  it('user should see a homepage with title and shortened urls', () => {
      cy.get('h1')
      cy.get('.url').find('h3').contains('Awesome photo')
      cy.get('.url').find('a').contains('http://localhost:3001/useshorturl/1')
      cy.get('.url').find('p').contains('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
  
    })
    it('user can view the form with proper inputs', () => {
      cy.get('[placeholder="Title..."]').should('exist')
      cy.get('[placeholder="URL to Shorten..."]').should('exist')
      cy.get('button').should('exist')
    })
    
})