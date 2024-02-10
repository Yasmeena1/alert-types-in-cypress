describe('to test alert types', () => {
    it('to test normal alert', () => {
        //find uncaught:exception :
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

        cy.visit("https://demo.automationtesting.in/Alerts.html")
        cy.get('#OKTab > .btn').click()
        cy.on("window:alert", (TheMes) => {
            expect(TheMes).to.eql("I am an alert box!")
        })
    });
});