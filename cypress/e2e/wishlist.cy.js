import user from '../fixtures/user.json'

describe('Wishlist Page Test', () => {
  it('adds and removes products from wishlist', () => {
    cy.visit('/')

    // log in
    cy.get('.fa-solid.fa-user').parent('button').click()
    cy.get('.v-field__input').eq(1).type(user.email)
    cy.get('.v-field__input').eq(2).type(user.password)
    cy.get('.button.button_black').eq(0).click()
    cy.get('.close-btn').click()
    cy.wait(3000)

    // add to wishlist
    for (let i = 0; i < 4; i++) {
      cy.get('.product-card__btn').eq(i).click()
    }

    // visit Wishlist Page
    cy.get('a[href="/my-wishlist"]').click()

    // check if exists
    cy.get('.product-card').should('exist')

    cy.get('.product-card__btn').eq(0).click()
    cy.get('.product-card__btn').eq(1).click()
    cy.get('.product-card__btn').eq(2).click()
    cy.get('.product-card__btn').eq(3).click()

    cy.get('[alt="Empty box"]').should('be.visible')

    // log out
    cy.get('#user').click()
    cy.get('#logOut').click()
  })
})
