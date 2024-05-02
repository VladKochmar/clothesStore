import user from '../fixtures/user.json'

describe('Orders History Page Test', () => {
  it('visits orders page', () => {
    cy.visit('/')

    // log in
    // log in
    cy.get('.fa-solid.fa-user').parent('button').click()
    cy.get('.v-field__input').eq(1).type(user.email)
    cy.get('.v-field__input').eq(2).type(user.password)
    cy.get('.button.button_black').eq(0).click()
    cy.get('.close-btn').click()

    cy.get('#user').click()
    cy.get('a[href="/my-orders"]').click()

    cy.get('.v-expansion-panel-title').eq(0).click()

    // log out
    cy.get('#logOut').click()
  })
})
