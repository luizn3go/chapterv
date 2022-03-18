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
    articles.verifyArticleCreation()
  })
})

// AAA => Arrange, Act, Assert
