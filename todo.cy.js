describe('Product Store - Formulario', () => {
  it('Acessar o Contact', () => {
    cy.visit('https://www.demoblaze.com/index.html');
    cy.get('.navbar-nav').contains('Contact').click();

    cy.get('#recipient-email.form-control')
    .should('be.visible')
    .type('standard_user@outlook.com');

    cy.get('#recipient-name').type('Standard User')
      .should('have.value', 'Standard User');

    cy.get('#message-text').type('Teste de Mensagem');
    cy.contains('Send message').click();
  });
});

describe('Product Store - Busca de Produtos', () => {
  it('Acessando as categorias do menu principal', () => {
    cy.visit('https://www.demoblaze.com/index.html');

    cy.get('.container').contains('Phones').click();
    cy.contains('Samsung galaxy s6').click();
    cy.contains('Home').click();


    cy.get('.container').contains('Laptops').click();
    cy.contains('Sony vaio i5').click();
    cy.contains('Home').click();


    cy.get('.container').contains('Monitors').click();
    cy.contains('Apple monitor 24').click();
    cy.contains('Home').click();

  });
});

describe('Product Store - Adicionar produtos no carrinho', () => {
  it('Adicionando produtos ao carrinho e depois excluindo-os', () => {
    cy.visit('https://www.demoblaze.com/index.html');

    cy.contains('Samsung galaxy s6').click();
    cy.contains('Add to cart').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added');
    });
    
    cy.contains('Home').click();
    cy.contains('Nexus 6').click();
    cy.contains('Add to cart').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added');
    });
    cy.contains('Cart').click();
    cy.contains('Delete').click({ multiple: true });
    cy.contains('Samsung galaxy s6').should('not.exist');
    cy.contains('Nexus 6').should('not.exist');
  });
});