describe('I can use the talks list', () => {
    beforeEach(() => {
        cy.visit('/talks');
    });

    it('Should be able to filter talks by a tag', () => {
        const TAG_SELECTOR = '[href="/talks?tag=agile"]';

        cy.get('.tagsList')
            .find(TAG_SELECTOR)
            .click();

        cy.get(TAG_SELECTOR).then($el => {
            const element = cy.wrap($el);
            element.contains('agile');
            element.parent().should('have.class', 'current');
        });

        cy.get('.talksContainer > div').each($el => {
            const element = cy.wrap($el).find(TAG_SELECTOR);
            element.should('exist');
            element.parent().should('have.class', 'current');
        });
    });

    it('Going to the talk list and access to a talk', () => {
        const TITLE_LINK =
            '/talks/edition-16-gestion-agile-de-projet-et-marche-de-noel';
        const TITLE_TEXT = 'Gestion agile de projet et Marché de Noël';
        cy.get(`[href="${TITLE_LINK}"]`).click();
        cy.get('h1').contains(TITLE_TEXT);
    });
});
