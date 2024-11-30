it('Tests to run with tags', {tags: ['@smoke']}, ()=>{
    cy.visit('https://bbc.co.uk')
})

it('Tests to run with tags', {tags: ['@regression']}, ()=>{
    cy.visit('https://gov.uk')
})
