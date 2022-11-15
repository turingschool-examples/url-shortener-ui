describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {fixture: "urls"})
    cy.visit('http://localhost:3000/')
  })

  it('on page load, a user should see the page title and shortened URLs', () => {
    cy.get('h1').contains('URL Shortener')
    .get('a').contains('http://localhost:3001/useshorturl/1')
    .get('p').should('be.visible')
  })
  
  it('should see the Form and inputs on page load', () => {
    cy.get('form').should('exist')
    .get('input').should('have.length', 2)
    .get('[type="text"]').should('be.visible')
    .get('[type="url"]').should('be.visible')
    .get('button').contains('Shorten Please!')
  })

  it('should see the information reflected in the input fields a new shortened URL when form is submitted', () => {
    cy.get('input').first().type('HI')
    .get('input').last().type('https://cdn1.matadornetwork.com/blogs/1/2017/04/33856356872_f49c5f8651_b-1-560x420.jpg')
    .get('button').click()
    .intercept('http://localhost:3001/api/v1/urls/', {fixture: "post"})
    .intercept('POST', 'http://localhost:3001/api/v1/urls/', {
      statusCode: 201,
      body: {
        id: 2,
        long_url: "https://cdn1.matadornetwork.com/blogs/1/2017/04/33856356872_f49c5f8651_b-1-560x420.jpg",
        short_url: "http://localhost:3001/useshorturl/3",
        title: "Hi"
      }
    })
  })
})