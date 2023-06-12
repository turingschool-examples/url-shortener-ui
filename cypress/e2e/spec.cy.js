describe('Main View ', () => {
  beforeEach(() => {
    cy.intercept('GET', '', {
      fixture: "data.json"
    }).visit('http://localhost:3001/api/v1/urls')
  })

  it('should display main view', ()=> {
    cy.get('h1').should('have.text', 'URL Shortener')
      .get('.url').should('have.length', 3)
      .get('h3').eq(0).should('have.text', 'Awesome photo')
      .get('a').eq(0).should('have.text', 'http://localhost:3001/useshorturl/1')
    })

  it('Should display the form', () => {
    cy.get('form')
      .get('input[name="title"')
      .get('input[name="urlToShorten"')
      .get('button').should('have.text', 'Shorten Please!')
    }) 

  it('Should reflect the user input in the input values', ()=> {
    cy.get('form')
      .get('input[name="title"').type('Test Title')
      .get('input[name="urlToShorten"').type('https://turing.edu/')

      .get('input[name="title"').should('have.value', 'Test Title')
      .get('input[name="urlToShorten"').should('have.value', 'https://turing.edu/ Title')

    }) 

});