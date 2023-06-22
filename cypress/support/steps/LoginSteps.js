/* global Given, Then, When, And */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("acesso o site organizze", () => {
    loginPage.acessarSite();
})

When("acesso a pagina de criar conta, preencho os campos de cadastro, confirmo os termos de uso e clico em criar conta", () => {
    loginPage.clicarBotaoPaginaLogin();

    loginPage.visualizarNomePaginaCriarConta();
    
    loginPage.preencherCampoEmail();
    
    loginPage.preencherCampoSenha();
    
    loginPage.preencherCampoRepetirSenha();
    
    loginPage.confirmarTermosDeUso();
    
    loginPage.clicarBotaoComecarAUsar();
})


Then("devo ser redirecionado para a página de Começando sua jornada", () => {
    loginPage.visualizarPaginaComecandoSuaJornada();
})