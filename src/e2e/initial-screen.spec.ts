// @ts-ignore

it('Open main page, and see "Hello world!" message', () => {
  cy.visit('http://localhost:3000');

  cy.get('#root').should('contain.text', 'Hello world!');
});
