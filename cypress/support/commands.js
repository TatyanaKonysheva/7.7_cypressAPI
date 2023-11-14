// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("createUser", () => {
  cy.request("POST", "https://petstore.swagger.io/v2/user", {
    id: 111,
    username: "OneName",
    firstName: "Anna",
    lastName: "Ivanova",
    email: "ivanova@mail.com",
    password: "1234",
    phone: "+79199362255",
    userStatus: 1,
  }).then((response) => {
    expect(response.status).be.eql(200);
    expect(response.body).be.eql({
      code: 200,
      type: "unknown",
      message: "111",
    });
  });
});
