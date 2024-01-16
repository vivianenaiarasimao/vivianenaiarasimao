///<reference types= "cypress" />
import {faker} from '@faker-js/faker';

const user_data = require('../fixtures/desafio.json')

describe('Cadastro de usuário', () => {

    beforeEach('Acessando pagina de cadastro', () => {
    // Acessando tela de cadastro de usuário
    cy.accessRegisterPage()
    })

it('Validar campo nome vazio', () => {
    // verifica se esta na pagina de cadastro
    cy.get('#user')
    .should('be.visible')
    .click()

    //clicou no registrar
    cy.saveRegister()

    // verificou mensagem
    cy.get('.errorLabel')
    .should('have.text', 'O campo nome deve ser prenchido')
})

it('Validar campo e-mail vazio', () => {
    cy.get('#user')
    .should('be.visible')
    .type(user_data.name)

    cy.get('#email')
    .should('be.visible')

    cy.saveRegister()

    cy.get('.errorLabel')
    .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
})

it('Validar campo e-mail inválido', () => {
    cy.get('#user')
    .should('be.visible')
    .type(user_data.name)

    cy.get('#email')
    .should('be.visible')
    .type('hshshshhshs')

    cy.saveRegister()

    cy.get('.errorLabel')
    .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
})


it('Validar campo senha vazio', () => {
    cy.get('#user')
    .should('be.visible')
    .type(user_data.name)

    cy.get('#email')
    .should('be.visible')
    .type(user_data.email)

    cy.saveRegister()

    cy.get('.errorLabel')
    .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
})

it('Validar campo senha inválido', () => {
    cy.get('#user')
    .should('be.visible')
    .type(user_data.name)

    cy.get('#email')
    .should('be.visible')
    .type(user_data.email)

    cy.get('#password')
    .should('be.visible')
    .type('12345')

    cy.saveRegister()

    cy.get('.errorLabel')
    .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
})

it('Cadastro realizado com sucesso', () => {

    const name = faker.person.fullName()
    const email = faker.internet.email()

    cy.get('#user')
    .should('be.visible')
    .type(name)

    cy.get('#email')
    .should('be.visible')
    .type(email)

    cy.get('#password')
    .should('be.visible')
    .type(user_data.password)

    cy.saveRegister()

    cy.get('#swal2-title')
    .should('have.text', 'Cadastro realizado!')

    cy.get('#swal2-html-container')
    .should('have.text', `Bem-vindo ${name}`)
})

})

