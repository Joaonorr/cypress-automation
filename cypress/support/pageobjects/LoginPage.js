/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const   loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site organizze
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a página de login do site
    clicarBotaoPaginaLogin() {
        cy.get(loginElements.botaoCriarConta()).click()
    }

    visualizarNomePaginaCriarConta() {
        cy.get(loginElements.modalCriarConta()).should('contain', 'Crie sua conta como quiser')
    }
  
    // Verifica se o botão tem o texto "Esqueceu sua senha?"
    visualizarBotaoRecuperarSenha() {
        cy.get(loginElements.botaoRecuperarSenha()).should('contain', 'Crie sua conta como quiser')
    }

    preencherCampoEmail() { 
        cy.fixture('user').then((user) => {
            cy.get(loginElements.campoEmail()).type(user.email).should('have.value', user.email)
        })
    }

    preencherCampoSenha() { 
        cy.fixture('user').then((user) => {
            cy.get(loginElements.campoSenha())
                .type(user.password)
                .should('have.value', user.password)
        })
    }

    preencherCampoRepetirSenha() {
        cy.fixture('user').then((user) => {
            cy.get(loginElements.campoRepetirSenha())
                .type(user.password)
                .should('have.value', user.password)
        })
    }

    confirmarTermosDeUso() {
        cy.get(loginElements.checkboxTermosDeUso()).click()
            .should('be.checked')
    }

    clicarBotaoComecarAUsar() { 
        cy.get(loginElements.botaoComecarAUsar()).click()
    }

    visualizarPaginaComecandoSuaJornada() {
        cy.get(loginElements.modalComecandoSuaJornada())
            .should('contain', 'Começando sua jornada!')
    }

}

export default LoginPage;