describe('viewports', () => {
  it('localhost self test!', () => {
    cy.viewport('ipad-2')
    cy.visit('http://localhost:3000')
    cy.wait(500)
    cy.compareSnapshot('localhost_self_test', 0.0)
  })
})
