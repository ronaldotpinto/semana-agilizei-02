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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('backgroundLogin', () => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        'R6xmma6F4U6edNQuu67M0u2cp8r9%2FhpZYURf6piD0AyrP9n0bIAVxOAgR6djmsk5JJYzVRCGug3k46JOUX%2BGSpluA2xt39PUqAtkVK8Cf9YZN%2BKpt%2FEIeqlzDvrpEm1geyyIQKvsis7HJmIJZdOsLugv%2FrKdF3FV1NH%2FuoqVy7vJc%2BRiljmt1GqlKJ70Zjsvk6yzjsANwntCHSwfJilAFNSExoE2JI67FSu1wGTjixZxws734lKkIVVSYt5KIsiFnTOz7p08rn2V7qjsS4IFbMjkSGlPq4lgUvy%2BainCMTVdY0p%2B66rZapV9KW7%2BaCteYspSOTU6wxwE4YjLafP37EvI7Zk7ZJE1uEgrRUiLg%2B7U0AZi2%2F45j3mdR6Aak6vzvjjE8rlHLN67pDEAdwpjoy0B7VoIwOv4MLy0olokkWQ%3D000308'
    );
})