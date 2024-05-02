describe('Catalog Test', () => {
  it('should filter t-shirts', () => {
    cy.visit('/catalog')
    cy.get('.tabs__title').eq(1).click()

    cy.get('.nav-item').eq(1).click()
    cy.get('.catalog').should('be.visible')

    cy.get('.activator-btn').eq(1).click()
    cy.get('.options-list__button').eq(3).click()

    cy.get('.activator-btn').eq(2).click()
    cy.get('.options-list__button').eq(2).click()

    cy.get('.activator-btn').eq(3).click()
    cy.get('#min').type('30')
    cy.get('#max').type('50')
    cy.get('#save').eq(0).click()

    cy.get('.button.button_black').eq(1).click()

    cy.get('.xmark').eq(1).click()
    cy.get('.clear-btn').click()

    cy.get('.select').select('low')

    cy.get('.v-breadcrumbs-item--link').eq(1).click()
  })
})
