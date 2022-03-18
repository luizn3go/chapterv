/// <reference types="cypress" />

import articles from '../support/pages/articles'

describe('Articles', () => {
// Arange

  beforeEach(() => {
    cy.login()
    cy.visit('/')
  })
  it('New article successful post', () => {
    articles.accessForm()
    articles.fillOutForm()
    articles.submitForm()

    cy.get('[show-authed="true"] > :nth-child(1) > .nav-link').click()
    cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link').click()

    articles.verifyArticleCreation()
  })
})

// AAA => Arrange, Act, Assert
