describe('When the server is down', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/urls', (res) => {
      res.destroy()
    })
    cy.visit('http://localhost:3000/')
  })
  
  it('should display an error message if server is down', () => {
  
  })
})