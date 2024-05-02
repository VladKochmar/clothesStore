import user from '../fixtures/user.json'
import addresses from '../fixtures/addresses.json'

describe('My Addresses Page Test', () => {
  it('creates and edits addresses', () => {
    cy.visit('/')

    // log in
    cy.get('.fa-solid.fa-user').parent('button').click()
    cy.get('.v-field__input').eq(1).type(user.email)
    cy.get('.v-field__input').eq(2).type(user.password)
    cy.get('.button.button_black').eq(0).click()
    cy.get('.close-btn').click()

    cy.get('#user').click()
    cy.get('a[href="/my-addresses"]').click()

    // add address
    cy.get('.cross-button').click()

    fillAddress(addresses.firstAddress)

    // edit address
    cy.get('#edit-btn').click()
    clearAll()
    fillAddress(addresses.secondAddress)

    // delete address
    cy.get('#delete-btn').click()

    // log out
    cy.get('#logOut').click()
  })
})

function clearAll() {
  cy.get('.v-field__input').eq(4).clear()
  cy.get('.v-field__input').eq(5).clear()
  cy.get('.v-field__input').eq(6).clear()
}

function fillAddress(data) {
  cy.get('.v-field__input').eq(3).type(data.country)
  cy.get('.v-field__input').eq(4).type(data.city)
  cy.get('.v-field__input').eq(5).type(data.address)
  cy.get('.v-field__input').eq(6).type(data.postcode)
  cy.get('#save-btn').click()
}
