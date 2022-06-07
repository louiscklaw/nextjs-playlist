describe(`test viewports`, () => {
  let preset_list = [
    'ipad-2',
    'ipad-mini',
    'iphone-8',
    'iphone-x',
    'iphone-se2',
    'macbook-13',
    'macbook-15',
    'macbook-16',
    'samsung-note9',
    'samsung-s10',
  ]

  let address_list = [`http://localhost:3000`, `http://localhost:3000/work/project1`]

  it(`landing page self test!`, () => {
    preset_list.map(preset => {
      address_list.map(address => {
        cy.viewport(preset)
        cy.visit(address)
        cy.wait(500)
        cy.compareSnapshot(`${preset}_localhost_self_test_${address.replace(/S/, '_')}`, 0.0)
      })
    })
  })
})
