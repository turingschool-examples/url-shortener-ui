describe('main page and user flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      "urls": [
          {
            "id": 1,
            "long_url": "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
            "short_url": "http://localhost:3001/useshorturl/1",
            "title": "Awesome photo"
            },
            {
              "long_url": "https://unsplash.com/photos/fivH_u2SxmQ",
              "id": 2,
              "title": "nature",
              "short_url": "http://localhost:3001/useshorturl/2"
              }
        ]
  })
  cy.visit("http://localhost:3000/")
  })

  it('should display the title of the application and the form', () => {
    cy.get('h1').contains('URL Shortener')
    cy.get('[placeholder="Title..."]')
    cy.get('[placeholder="URL to Shorten..."]')
    cy.get('button')
  })

  it('should display the current url cards on the page', () => {
    cy.get('.url').first()
      .contains('Awesome photo')
      .get(':nth-child(1) > a')
      .get(':nth-child(1) > p')

    cy.get('.url').last()
      .contains('nature')
      .get(':nth-child(2) > a')
      .get(':nth-child(2) > p')
  })

  it('should be able to fill out the form and see the input values change', () => {
    cy.get('[placeholder="Title..."]').type('Glamour Dog')
    cy.get('[placeholder="URL to Shorten..."]').type('https://unsplash.com/photos/BJaqPaH6AGQ')

  })
})


