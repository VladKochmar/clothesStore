import user from '../fixtures/user.json'

describe('Product Page Test', () => {
  it('adds product to cart and wishlist', () => {
    cy.visit('/catalog/sweatshirts')

    // visit product page
    cy.get('.product-card__img').eq(0).click()

    // check product slider
    cy.get('.thumb-slider__slide').eq(1).click()

    // check accordion
    cy.get('.accordion__title').each(($accordion) => {
      cy.wrap($accordion).click()
    })

    // add to wishlist without logging in
    cy.get('.heart-button').click()

    // check size button
    cy.get('.size-button').eq(2).click()

    // add to cart without logging in
    cy.get('.button.button_black').eq(1).click()

    // log in
    cy.get('.fa-solid.fa-user').parent('button').click()
    cy.get('.v-btn.v-theme--light').eq(2).click()

    cy.get('.v-field__input').eq(3).type(user.name)
    cy.get('.v-field__input').eq(4).type(user.email)
    cy.get('.v-field__input').eq(5).type(user.password)
    cy.get('.button.button_black').eq(1).click()
    cy.get('.close-btn').click()
    cy.wait(5000)

    // add to wishlist
    cy.get('.heart-button').click()

    // add to cart
    cy.get('#add').click()
  })
})
