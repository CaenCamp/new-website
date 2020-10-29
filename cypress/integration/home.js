describe('I can access to the home page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Visits the Caen camp website', () => {
        cy.get('nav > [aria-current="page"]').should('have.text', 'accueil');
    });

    it('Going to speakers page', () => {
        cy.get('[href="/speakers"] > span').then(element => {
            const numberOfSpeakers = parseInt(element.text());
            element.click();
            cy.get('.speakerItem').should('have.length', numberOfSpeakers);
        });
    });

    // We don't have 5 first talks, that's why we have numberOfTalks - 5 elements on the list.
    it('Going to talks page', () => {
        cy.get('[href="/talks"] > span').then(element => {
            const numberOfTalks = parseInt(element.text());
            element.click();
            cy.get('.talkItem').should('have.length', numberOfTalks - 5);
        });
    });

    it('Going to codings page', () => {
        cy.get('[href="/coding-caen-camp"] > span').then(element => {
            const numberOfCCC = parseInt(element.text());
            element.click();
            cy.get('.codingItem').should('have.length', numberOfCCC);
        });
    });

    it('Going to devops page', () => {
        cy.get('[href="/devops-caen-camp"] > span').then(element => {
            const numberOfDevopsTalks = parseInt(element.text());
            element.click();
            cy.get('.devopsItem').should('have.length', numberOfDevopsTalks);
        });
    });
});
