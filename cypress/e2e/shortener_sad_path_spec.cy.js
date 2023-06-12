describe('When the server is down', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  
  it('should display an error message if server is down', () => {
    cy.intercept('http://localhost:3001/api/v1/urls', (res) => {
      res.destroy()
    })
    cy.get('.error-message').contains('Failed to fetch')
  })

  it('should not allow user to submit uncompleted form', () => {
    cy.intercept('http://localhost:3001/api/v1/urls', {
      status: 200,
      fixture: 'example.json'
    })
    cy.visit('http://localhost:3000/')
    cy.get('.title').type('Got places to be')
    cy.get('.submit-btn').click()
    cy.get('h4').contains('please fill out all inputs')
  })
})