# Semana Agilizei 2.0

>Cypress na prática, do zero à integração contínua.

## Dia 1

>Criando conexões e dando os primeiros passos

* Repositórios que você deve acompanhar (e deixar uma ⭐)
  * Repositório oficial do Cypress: <https://github.com/cypress-io/cypress>
  * Cypress Essencial Mindmap – <https://github.com/samlucax/cypress-essencial-mindmap>
  * Cypress Essencial Mindmap – [Vídeo](https://www.youtube.com/watch?v=utdYrFjs4Do)
  * Cypress FAQ – <https://github.com/samlucax/cypress-faq>
  * Awesome Cypress – <https://github.com/brunopulis/awesome-cypress>
* Pessoas que você deve seguir e acompanhar
  * Gleb Bahmutov – VP de Engenharia, e um dos que mais compartilha novidades – <https://github.com/bahmutov>
  * Brian Mann – Fundador e CEO, responde constantemente as issues – <https://github.com/brian-mann>
  * Jennifer Shehane – Dev / QA, responde a maioria das issues – <https://github.com/jennifer-shehane>
  * Aproveite e me siga no Github também – <https://github.com/samlucax>
* Comunidades que você deve participar
  * Cypress BR no Telegram – t.me/cypress_br
  * Gitter Cypress – <https://gitter.im/cypress-io/cypress>
* Programas para Instalar
  * NodeJS – [Download](https://nodejs.org/en/)
  * Visual Studio Code – [Download](https://code.visualstudio.com/)
* Plugins do Visual Studio Code
  * Mocha ES6 Snippets
  * Cypress Snippets

## Dia 2

>Utilizando Cypress na prática

* Objeto de Testes:
  * <http://automationpractice.com/index.php>
* Cypress Schema:
  * <https://gist.github.com/samlucax/2b31d4438496f731a033bf57357abd0>
* Entenda mais sobre o experimentalSourceRewriting:
  * <https://github.com/cypress-io/cypress/issues/5569>
* Mais configurações do Cypress:
  * <https://docs.cypress.io/guides/references/configuration.html#Options>

## Dia 3

>Evoluindo a estrutura

* Ferramenta para testar expressões regulares: <https://regexr.com>
* Autocomplete para comandos personalizados:
  * <https://gist.github.com/samlucax/69e831282adf604ffd7222af4c84e2d3>
* Entenda mais sobre os conceitos vistos hoje
  * <https://docs.cypress.io/api/cypress-api/cookies.html#Defaults>
  * <https://docs.cypress.io/api/cypress-api/custom-commands.html#Best-Practices>
  * <https://docs.cypress.io/api/commands/invoke.html#Syntax>
  * <https://docs.cypress.io/api/commands/writefile.html#JSON>
  * <https://docs.cypress.io/api/commands/readfile.html#Syntax>

## Dia 4

>Relatórios e Integração contínua

* Bibliotecas (_npm install -D + "nome-biblioteca"_)
  * **cypress-multi-reporters** -> Biblioteca para gerar mais de um report - mockawesome, junit
  * **mocha** -> Biblioteca para execução dos testes (_adicional_)
  * **mochawesome** -> Biblioteca responsável por gerar os arquivos ".json" usaddos no report html
    * Gera um arquivo ".json" para cada spec - compra.spec.json...
  * **mochawesome-merge** -> Biblioteca para realizar o merge dos arquivos gerados pelo mockawesome -> "specs.json" por exemplo
  * **mochawesome-report-generator** -> Biblioteca para gerar o relatório em html usando os arquivos ".json" gerados
    * Pode ser referenciada no código pelo alias "marge"
  * **rimraf** -> Biblioteca que adiciona o comando "rm -rf" para node (independente do S.O.)
