describe('display', () => {
  beforeEach(()=> {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      fixture: 'mainDisplay'
    }).as('main')
    cy.visit('http://localhost:3000/')
  })
  it('should show the page title, form and the existing shortened URLs', () => {
    cy.get('header').contains('h1', 'URL Shortener')
    .get('form').should('exist')
    .get('[placeholder="Title..."]').should('have.attr', 'name', 'title')
    .get('[placeholder="URL to Shorten..."]').should('have.attr', 'name', 'long_url')
    .get('.url').contains('h3', 'Awesome photo')
    .get('.url').contains('a', 'http://localhost:3001/useshorturl/1')
  })
  it('should fill out the form and have the information reflected in the input fields and the new shortened URL is rendered upon button click', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      body: {
        title: 'Ahhh',
        short_url: 'http://localhost:3001/useshorturl/8',
        long_url: 'https://ahhh.com/ahh?ahh-moreAhhhhs'
      }
    })
    cy.get('input[name="title"]').type('Ahhh').should('have.value', 'Ahhh')
    .get('input[name="long_url"]').type('https://ahhh.com/ahh?ahh-moreAhhhhs').should('have.value', 'https://ahhh.com/ahh?ahh-moreAhhhhs')
    .get('button').click()
    cy.wait('@main')
    cy.get('.url').last().contains('h3', 'Ahhh')
    .get('.url').last().contains('a', 'http://localhost:3001/useshorturl/8')
  })
})