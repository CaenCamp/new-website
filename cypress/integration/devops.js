describe('I can use the devops list', () => {
    beforeEach(() => {
        cy.visit('/devops-caen-camp');
    });

    it('Going to the devops list and access to a devops', () => {
        const TITLE_LINK = '/devops-caen-camp/edition-1';
        cy.get(`a[href="${TITLE_LINK}"]`)
            .eq(0)
            .click();
    });
});
