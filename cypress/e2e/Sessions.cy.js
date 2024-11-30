
beforeEach(()=>{
    cy.fixture('login2').then((data)=>{
        cy.login(data.Username, data.Password)
    })

})


it('login one time', {tags: ['@session']},()=>{
    cy.visit('https://demoblaze.com')
})

it('login second time', {tags: ['@session']},()=>{
    cy.visit('https://demoblaze.com')
})

it('login third time', {tags: ['@session']},()=>{
    cy.visit('https://demoblaze.com')
})

it('login fourth time',{tags: ['@session']}, ()=>{
    cy.visit('https://demoblaze.com')
})

it('login fifth time',{tags: ['@session']}, ()=>{
    cy.visit('https://demoblaze.com')
})

it('login 6th time', {tags: ['@session']},()=>{
    cy.visit('https://demoblaze.com')
    cy.get (`#logout2`).should('be.visible');
})
