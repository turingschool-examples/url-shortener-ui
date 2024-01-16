beforeEach(() => {
  cy.intercept("GET", "https://localhost:3001/api/v1/urls", {
    statusCode: 200,
    fixture: "example"
  })
  .visit("http://localhost:3000")
})

describe('URL Shortener', () => {
 it('displays the page title', () => {
  cy.get("h1").contains("URL Shortener").should("be.visible")
 })
 it('displays the form', () => {
  cy.get('form').should("be.visible")
 })
 it("displays the existing shortened URLS", () => {
  cy.get(".url").should("be.visible")
 })
 it('displays the information properly reflected in input values', () => {
    cy.get('input[name=title]').type("Room Escape Artist").should("have.value", "Room Escape Artist")
    cy.get(('input[name=urlToShorten]')).type("http://www.roomescapeartist.com").should("have.value", "http://www.roomescapeartist.com")
  })
  it('submits the form with the shortened URL', () => {
    cy.get('input[name=title]').type("Room Escape Artist").should("have.value", "Room Escape Artist")
    cy.get(('input[name=urlToShorten]')).type("http://www.roomescapeartist.com").should("have.value", "http://www.roomescapeartist.com")
    cy.get('button').click()
    cy.get("a").last().should("be.visible")
  })
})


