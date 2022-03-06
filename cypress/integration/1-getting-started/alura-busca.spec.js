describe('Alura busca cursos', () => {
  beforeEach(() => {
    cy.visit('https://www.alura.com.br/');
  });
  it('buscar curso', () => {
    cy.get('#header-barraBusca-form-campoBusca').type('python');
    cy.get('.header-barraBusca-form-submit').click();

    cy.get('h4.busca-resultado-nome')
      .should('contain', 'Formação Python');
  });
});