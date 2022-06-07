describe('viewports', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })

  it('example.com self test!', () => {
    cy.viewport('ipad-2')
    cy.visit('https://www.example.com')
    cy.compareSnapshot('example_com_self_test', 0.0)
  })
})
