/// <reference types="cypress" />

context('Compra', () => {
    it('Efetuar uma compra de produto', () => {
        cy.backgroundLogin(); 

        //http://automationpractice.com/index.php
        cy.visit('/');

        let nomeProduto = 'Faded Short Sleeve T-shirts';

        cy.contains(nomeProduto).trigger('mouseover');

        cy.contains(nomeProduto)
            .parent() // h5
            .siblings('div.button-container')
            .children('a')
            .first() // add to cart
            .click();

        // Validando se o produto foi adicionasdo ao carrinho com sucesso
        cy.get('.icon-ok')
            .parent()
            .should('contain.text', 'Product successfully added to your shopping cart');
        
        cy.get('span#layer_cart_product_title')
            .should('contain.text', nomeProduto);

        cy.get(".button-container a[href$='controller=order']").click();

        cy.get(".cart_navigation a[href$='order&step=1']").click();

        /**
        * Login realizado via página, alterado pelo background
        * 
        * cy.get('#email').type('semana.agilizei@mail.com');
        * cy.get('#passwd').type('12345');
        *
        * cy.get('button#SubmitLogin').click();
        * 
        */      

        // Garantir que o endereço de entrega é o mesmo de cobrança
        // assserção | atributo | valor
        cy.get('[type=checkbox]#addressesAreEquals')
            .should('have.attr', 'checked', 'checked');

        cy.get('[type=checkbox]#addressesAreEquals')
            .should('have.attr', 'name', 'same');             

        cy.get('button[name=processAddress]').click();
        
        cy.get('[type=checkbox]#cgv').check();
        
        cy.get('button[name=processCarrier]').click();

        cy.get('.bankwire').click();

        cy.get('.cart_navigation button[type=submit]')
            .find('span')
            .contains('I confirm my order')
            .click();

        cy.get('.cheque-indent strong')
            .should('contain.text', 'Your order on My Store is complete');

        cy.get('div.box')
            .invoke('text')
            .then((text) => {
                console.log(text.match(/[A-Z][A-Z]+/g)[1]);
                // 0 -> Nome do banco
                // 1 -> ID do pedido

                // escrita de um arquivo json com o conteúdo do pedido
                // caminho do arquivo | conteúdo do arquivo
                cy.writeFile('cypress/fixtures/pedido.json', { id: `${ text.match(/[A-Z][A-Z]+/g)[1] }` });
            });

        cy.get("a[title='Back to orders']").click();
        
        // leitura de arquivo 
        cy.readFile('cypress/fixtures/pedido.json').then((pedido) => {
            cy.get('tr.first_item .history_link a')
                .should('contain.text', pedido.id);
        }); 
    });
});