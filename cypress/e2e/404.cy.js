describe('Not Found Page Test', () => {
  it('Visits About page', () => {
    cy.visit('/404')

    cy.get('.v-input__control').eq(0).click()
    cy.get('.v-list-item-title').eq(1).click()
  })
})
