/// <reference types="cypress" />

describe('Registration', () => {
  it('Successful registration', () => {
    cy.intercept({
    // hostname = https://api.realworld.io
    // path     = /api/users
    // method   = POST
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 200,
      fixture: 'cadastro-com-sucesso.json'
    }).as('postUsers')

    cy.visit('register')
    cy.get('[placeholder="Username"]').type('chaptervagilizei')
    cy.get('[placeholder="Email"]').type('chaptervagilizei@mail.com')
    cy.get('[placeholder="Password"]').type('123456')

    cy.get('button.btn-primary').click()

    cy.contains('No articles are here... yet.').should('be.visible')
  })
  it('registration failed because username is already registered', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 422,
      fixture: 'registration-failed-username-exists.json'
    }).as('postUsers')

    cy.visit('register')
    cy.get('[placeholder="Username"]').type('chaptervagilizei')
    cy.get('[placeholder="Email"]').type('chaptervagilizei@mail.com')
    cy.get('[placeholder="Password"]').type('123456')

    cy.get('button.btn-primary').click()

    cy.contains('username has already been taken').should('be.visible')
  })

  it('registration failed because email is already registered', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 422,
      fixture: 'registration-failed-email-exists.json'
    }).as('postUsers')

    cy.visit('register')
    cy.get('[placeholder="Username"]').type('chaptervagilizei')
    cy.get('[placeholder="Email"]').type('chaptervagilizei@mail.com')
    cy.get('[placeholder="Password"]').type('123456')

    cy.get('button.btn-primary').click()

    cy.contains('email has already been taken').should('be.visible')
  })
})
