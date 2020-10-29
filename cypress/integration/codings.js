describe('I can use the codings list', () => {
    beforeEach(() => {
        cy.visit('/coding-caen-camp');
    });

    it('Going to the codings list and access to a codings', () => {
        const TITLE_LINK = '/coding-caen-camp/hacktoberfest-2018';
        const TITLE_TEXT = 'Hacktoberfest 2018';
        cy.get(`[href="${TITLE_LINK}"]`).click();
        cy.get('h1').contains(TITLE_TEXT);
    });
});
