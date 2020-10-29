describe('I can see sponsors page', () => {
    beforeEach(() => {
        cy.visit('/sponsors');
    });

    it('See the sponsors lists', () => {
        cy.get(`h1`).contains('Les sponsors des CaenCamp.s');
    });
});
