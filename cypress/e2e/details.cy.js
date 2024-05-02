import user from '../fixtures/user.json'

describe('User Details Page Test', () => {
  it('edits user name and phone number', () => {
    cy.visit('/')

    // log in
    cy.get('.fa-solid.fa-user').parent('button').click()
    cy.get('.v-field__input').eq(1).type(user.email)
    cy.get('.v-field__input').eq(2).type(user.password)
    cy.get('.button.button_black').eq(0).click()
    cy.get('.close-btn').click()

    // visit User Details Page
    cy.get('#user').click()

    // Change user data
    cy.get('#userName').clear()
    cy.get('#userName').type('John Wick')

    cy.get('#phone').clear()
    cy.get('#phone').type(user.phone)

    // save changes
    cy.get('#save-btn').click()

    // Change user data
    cy.get('#userName').clear()
    cy.get('#userName').type(user.name)

    cy.get('#phone').clear()

    // save changes
    cy.get('#save-btn').click()

    // log out
    cy.get('#logOut').click()
  })
})
