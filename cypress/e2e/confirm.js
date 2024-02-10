describe('to test alert types', () => {
    it('to test confirm ', function() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        //when click ok

        // cy.contains("Click for JS Confirm").click()

        
        //when click cancel
       
        cy.on('window:confirm', function(){
            return false

        })
        cy.contains("Click for JS Confirm").click()
    })
});