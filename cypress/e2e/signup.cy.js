
import { faker } from '@faker-js/faker';

it('should register a new user', () => {

    const name = 'lucca'
    const email= 'lucca1@mailinator.co'
    const password = 'pwd123'

    cy.task('removeUser', email)
        .then(function(result){
            console.log(result);
        })

    cy.visit('/signup')

    cy.get('input[placeholder="Nome"]').type(name)
    cy.get('input[placeholder="E-mail"]').type(email)
    cy.get('input[placeholder="Senha"]').type(password)
 
    // cy.intercept('POST', '/users', {
    //     statusCode:200
    // }).as('postUser')

    cy.contains('button', 'Cadastrar').click()

    // cy.wait('@postUser')

    cy.get('.toast')
        .should('be.visible')
        .find('p')
        .should('have.text', 'Agora você pode fazer seu login no Samurai Barbershop!')
})