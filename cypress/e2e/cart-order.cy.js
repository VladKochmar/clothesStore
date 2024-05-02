import user from '../fixtures/user.json'

describe('Cart Page Test', () => {
  it('makes order', () => {
    cy.visit('/catalog/shirts')

    // log in
    cy.get('.fa-solid.fa-user').parent('button').click()
    cy.get('.v-field__input').eq(1).type(user.email)
    cy.get('.v-field__input').eq(2).type(user.password)
    cy.get('.button.button_black').eq(0).click()
    cy.get('.close-btn').click()

    // visit product page
    cy.get('.product-card__img').eq(0).click()

    // add to cart
    cy.get('.size-button').eq(2).click()
    cy.get('#add').click()

    // add to cart
    cy.get('.size-button').eq(1).click()
    cy.get('#add').click()

    // visit cart
    cy.get('[href="/my-cart"]').click()

    // increase
    cy.get('.plus').eq(0).click()
    cy.wait(300)

    // add products
    cy.get('.quantity__input').eq(1).children('input').type('12{enter}')
    cy.wait(3000)

    // decrease
    cy.get('.minus').eq(0).click()
    cy.wait(300)

    // checkout
    cy.get('#checkout').click()
  })
})
