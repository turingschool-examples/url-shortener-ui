describe('Post Test', () => {
  beforeEach(()=> {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      fixture: "data.json"
    }).intercept('POST', 'http://localhost:3001/api/v1/urls', {
      fixture: "post.json"
    })
    .visit('http://localhost:3000')
  })

  it('Should Display posted information', () => {
    cy.get('form')
    .get('input[name="title"').type('Test Title')
    .get('input[name="urlToShorten"').type('https://turing.edu/')

    .get('input[name="title"').should('have.value', 'Test Title')
    .get('input[name="urlToShorten"').should('have.value', 'https://turing.edu/')
    .get('button').click()

    .get('.url').should('have.length', 4)
    .get('.url').last()
    .get('h3').last().should('have.text', 'TEST')
    .get('a').last().should('have.text', 'http://localhost:3001/useshorturl/4')
  })
})