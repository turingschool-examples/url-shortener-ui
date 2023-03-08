describe('Homepage flow', () => {
    describe('Should vist page, and see Title and existing Urls', () => {
      beforeEach(() => {
        cy.intercept("GET", "http://localhost:3001/api/v1/urls", {
          fixture: "fixture.json"
        })
        cy.visit('http://localhost:3000/')
      })
      
    }) 

    it("Should be able to type and see a value in each input", () => {
        cy.get('[placeholder="Title..."]')
          .type("this is new")
          .should("have.value", "this is new")
    
         cy.get('[placeholder="URL to Shorten..."]')
          .type("https://www.google.com/search?q=suunfolower&rlz=1C5CHFA_enUS1022US1024&oq=suunfolower&aqs=chrome..69i57.5353j0j4&sourceid=chrome&ie=UTF-8://www.playstation.com/en-us/games/hogwarts-legacy/")
          .should("have.value", "https://https://www.google.com/search?q=suunfolower&rlz=1C5CHFA_enUS1022US1024&oq=suunfolower&aqs=chrome..69i57.5353j0j4&sourceid=chrome&ie=UTF-8.playstation.com/en-us/games/hogwarts-legacy/")
    
      })


})