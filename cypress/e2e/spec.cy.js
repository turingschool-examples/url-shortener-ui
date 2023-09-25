describe('url shortener', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      fixture: 'urls.json',
    }).as('getUrls');
  });

  it('should display the page a heading, form, and all urls', () => {
    cy.visit('http://localhost:3000/');
    cy.wait('@getUrls');

    cy.get('.heading').should('contain', 'URL Shortener');

    cy.get('.form input').should('have.length', 2);
    cy.get('.form button').should('exist');

    cy.fixture('urls.json').then(sampleUrls => {
      cy.get('.url').should('have.length', sampleUrls.urls.length);
      sampleUrls.urls.forEach(sampleUrl => {
        cy.get('.url h3').should('contain', sampleUrl.title);
        cy.get('.url a').should('contain', sampleUrl.short_url);
        cy.get('.url p').should('contain', sampleUrl.long_url);
      });
    });
  });
  it('should have a form that takes input values', () => {
    cy.visit('http://localhost:3000/');
    cy.wait('@getUrls');

    cy.get('input[name=title]').type('Fabulous Wombat');
    cy.get('input[name=url]').type('https://someurl.com');
    cy.get('input[name=title]').should('have.value', 'Fabulous Wombat');
    cy.get('input[name=url]').should('have.value', 'https://someurl.com');
  });

  it('should add a new url when the user submits one', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      id: 3,
      title: 'Fabulous Wombat',
      short_url: 'http://localhost:3001/useshorturl/3',
      long_url: 'https://areallyreallyreallyreallycoolwombatpicture',
    }).as('postUrl');

    cy.visit('http://localhost:3000/');
    cy.wait('@getUrls');

    cy.get('input[name=title]').type('Fabulous Wombat');
    cy.get('input[name=url]').type(
      'https://areallyreallyreallyreallycoolwombatpicture',
    );
    cy.get('button').click();
    cy.wait('@postUrl');

    cy.get('.url h3').last().should('contain', 'Fabulous Wombat');
    cy.get('.url a')
      .last()
      .should('contain', 'http://localhost:3001/useshorturl/3');
    cy.get('.url p')
      .last()
      .should('contain', 'https://areallyreallyreallyreallycoolwombatpicture');
  });
});

describe('error', () => {
  it('should display an error to the user', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      statusCode: 500,
      ok: false
    }).as('error');

    cy.visit('http://localhost:3000/');
    cy.wait('@error');
    cy.get('.message').should('contain', 'Oops! Something went wrong.')
    

  })

  it('should display an error to the user', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      statusCode: 404,
      ok: false
    }).as('error');

    cy.visit('http://localhost:3000/');
    cy.wait('@error');
    cy.get('.message').should('contain', "Oops! We couldn't find those urls.")

  })

  it('should display a post error to the user', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      fixture: 'urls.json',
    }).as('getUrls');
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      statusCode: 500,
      ok: false
    }).as('error');

    cy.visit('http://localhost:3000/');
    cy.wait('@getUrls');

    cy.get('input[name=title]').type('Fabulous Wombat');
    cy.get('input[name=url]').type(
      'https://areallyreallyreallyreallycoolwombatpicture',
    );
    cy.get('button').click();
    cy.wait('@error');
    cy.get('.postError').should('contain', 'Oops! Something went wrong.')
    cy.get('.url').should('have.length', 2)
  })
})
