describe('I am very flaky', () => {
    it('I can fail or not, it depends.', () => {
        const int = Math.floor(Math.random() * 10);

        expect(int % 2 === 0).to.equal(true);
    });
});
