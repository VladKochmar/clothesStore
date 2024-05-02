describe('Information pages test', () => {
  it('should check information pages', () => {
    cy.visit('/payments')

    cy.get('.v-input__control').eq(0).click()
    cy.get('.v-list-item-title').eq(1).click()

    cy.get('.link-item').eq(0).children().click()

    cy.get('.v-input__control').eq(0).click()
    cy.get('.v-list-item-title').eq(0).click()

    cy.get('.link-item').eq(1).children().click()

    cy.get('.v-input__control').eq(0).click()
    cy.get('.v-list-item-title').eq(1).click()

    cy.get('.link-item').eq(3).children().click()

    cy.get('.v-input__control').eq(0).click()
    cy.get('.v-list-item-title').eq(0).click()
  })
})
