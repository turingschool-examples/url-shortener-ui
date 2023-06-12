describe('Main View ', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      fixture: "data.json"
    }).as('getData').visit('http://localhost:3000')
  })

  it('should display main view', ()=> {
    cy.wait('@getData').get('h1').should('have.text', 'URL Shortener')
      .get('.url').should('have.length', 3)
      .get('h3').eq(0).should('have.text', 'Awesome photo')
      .get('a').eq(0).should('have.text', 'http://localhost:3001/useshorturl/1')

      .get('h3').eq(1).should('have.text', 'title')
      .get('a').eq(1).should('have.text', 'http://localhost:3001/useshorturl/2')

      .get('h3').eq(2).should('have.text', 'chatGPT')
      .get('a').eq(2).should('have.text', 'http://localhost:3001/useshorturl/3')

    })

  it('Should display the form', () => {
    cy.wait('@getData').get('form')
      .get('input[name="title"')
      .get('input[name="urlToShorten"')
      .get('button').should('have.text', 'Shorten Please!')
    }) 

  it('Should reflect the user input in the input values', ()=> {
    // this test SOMETIMES runs an error - it mentions the urlToShorten input being disables
    // i can not recreate the error on command, nor can i find where the input is being disabled
    // the test will pass if you reload Cypress

    cy.wait('@getData').get('form')
      .get('input[name="title"').type('Test Title')
      .get('input[name="urlToShorten"').type('https://turing.edu/')

      .get('input[name="title"').should('have.value', 'Test Title')
      .get('input[name="urlToShorten"').should('have.value', 'https://turing.edu/')
    }) 

});