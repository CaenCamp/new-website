describe('I can use the speakers list', () => {
    beforeEach(() => {
        cy.visit('/speakers');
    });

    it('Going to the speakers list, access to Alexis janvier and come back to the list', () => {
        cy.get('[href="/speakers/alexis-janvier"]').click();
        cy.get('h1').should('have.text', 'Alexis Janvier');
        cy.contains('Retour à la liste').click();
        cy.url().should('contains', '/speakers');
    });

    it('Going to the speakers list and submit a talk', () => {
        cy.get('[href="/call-for-speakers"]:first').click();
        cy.get('input[name="speaker"]').type('Dark Vador');
        cy.get('input[name="title"]').type('How to build a death star');
        cy.get('select[name="format"]').select('talk');
        cy.get('textarea[name="message"]').type(
            `I will show you how to build a death star and how to conqueer the galaxy.
            Jedi are not allowed even if when I was a child I was a jedi...`,
        );
        cy.get('input[name="contact"]').type('dark.vador@galacticempire.com');
        cy.get('button[type="submit"]').click();
        cy.url().should('eq', 'https://formspree.io/contact@alexisjanvier.net');
    });
});
