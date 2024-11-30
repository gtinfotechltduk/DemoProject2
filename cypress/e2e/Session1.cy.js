beforeEach(()=>{
    cy.fixture('login1').then((data)=>{
        cy.login(data.Username, data.Password)
    })

})

it('login one time', {tags: ['@session1']},()=>{
      cy.visit('/')
    cy.wait(2000)

});