const el = require('./elements').ELEMENTS

const articleName = 'Article #' + new Date().getTime()

class Articles {
  accessForm () {
    cy.get(el.linkNewArticle).click()
  }

  fillOutForm () {
    cy.get(el.inputTitle).type(articleName)
    cy.get(el.inputDescription).type('This is my first test article')
    cy.get(el.inputBody).type('An example of article being written with Cypress')
    cy.get(el.inputTagField).type('cypress')
  }

  submitForm () {
    cy.contains('button', 'Publish Article').click()
  }

  verifyArticleCreation () {
    cy.contains(articleName).should('be.visible')
    cy.get('h1').should('have.text', articleName)
  }
}

export default new Articles()
