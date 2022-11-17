//<refrence type ="cypress"/>
describe("Test Suit" ,()=>
{
    it("Also for Jenkin", ()=>
    {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#contact-us").invoke("removeAttr","target").click()
       cy.get("h2[name='contactme']")
       .should("contain", "CONTACT US")
       //knvnv
    })
})