// @ts-ignore

it('Open main page, and see "Hello world!" message', () => {
  cy.visit('http://localhost:3000');

  cy.contains('Hello world!');
});
