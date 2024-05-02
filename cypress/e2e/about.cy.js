describe('About Us Test', () => {
  it('Visits About page', () => {
    cy.visit('/about-us')
    cy.get('#scroll-btn').click()
  })
})
