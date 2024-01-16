/// <reference types="cypress" />

describe('Interações', () => {

    it('Digitar em um campo', () => {
        cy.visit('/') 
            .get('.header-logo')

        cy.get('.form-control')
            .type('viviane-naiara@hotmail.com')

    })

    it('Click', () => {
        cy.visit('/') 
            .get('.header-logo')

        // // click normal    
        // cy.get('.fa-user')
        //     .click()

        // // click duplo 
        // cy.get('.fa-user')
        //     .dblclick()

        // // click botao direito
        // cy.get('.fa-user')
        //     .rightclick()

        // //click por cordenadas
        // cy.get('.fa-user')
        //     .click(100,100, {force: true});

        // simular apertar enter
        cy.get('.form-control')
            .type('viviane-naiara@hotmail.com{enter}')

        })

            it('Select', () => { 
                cy.visit('/')
                    .get('.header-logo')
        
                cy.get('.footer_one_widget')
                    .contains('Checkout View Two')
                    .click()
                    
                cy.get('#country')
                    .select('Colombia')    
        
            })

            it.only('Check e radio button', () => { 
                cy.visit('/')
                    .get('.header-logo')
        
                cy.get('.footer_one_widget')
                    .contains('Checkout View One')
                    .click()
                    
                cy.get('#materialUnchecked')
                    .check()
                    .uncheck()   
                    
                cy.get('#css')
                    .check()    
        
            })

})