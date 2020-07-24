describe('Pizza Form', () => {
    it('Renders Form', ()=> {
        cy.visit('http://localhost:3000/pizza')
    })
    it('populates name', () =>{
        cy.get('#name').type('ariana').should('have.value', 'ariana')

    })
    it('can select multiple toppings', () => {
        cy.get('#pepperoni').check()
        cy.get('#sausage').check()
        cy.get('#mushroom').check()
        cy.get('#onion').check()

     })
     it('can submit the form', () => {
        cy.get('#instructions').type('Extra Crispy')
        cy.get('#submitButton').click()
     })


})