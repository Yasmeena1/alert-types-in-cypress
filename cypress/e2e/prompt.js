describe('to test alert types', () => {
    it('to test prompt ', () => {

        //find uncaught:exception :
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

        cy.visit("https://demoqa.com/alerts")
        cy.window().then((win) => {
            cy.stub(win, "prompt").returns("yasmeen")


        })
        cy.get('#promtButton').click()


    });
});