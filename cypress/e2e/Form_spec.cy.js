describe('POST to the main page by filling out the form', () => {
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {fixture: 'getUrls'})
      cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
        "id": 3,
        "long_url": "https://unsplash.com/photos/BJaqPaH6AGQ",
        "short_url": "http://localhost:3001/useshorturl/3",
        "title": "Glamour Dog"
        })
      cy.visit('http://localhost:3000/')
    })
    it('should be able to fill out the form and POST a new url', () => {
      cy.get('[placeholder="Title..."]').type('Glamour Dog')
      cy.get('[placeholder="URL to Shorten..."]').type('https://unsplash.com/photos/BJaqPaH6AGQ')
      cy.get('button').click()
      cy.get('section > :nth-child(3)')
      cy.get(':nth-child(3) > h3')
      cy.get(':nth-child(3) > p')
    })
  })