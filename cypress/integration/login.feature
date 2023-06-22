Feature: Criar conta organizze

    Scenario: Acessar tela de criar conta
        Given acesso o site organizze
        When acesso a pagina de criar conta, preencho os campos de cadastro, confirmo os termos de uso e clico em criar conta
        Then devo ser redirecionado para a página de Começando sua jornada