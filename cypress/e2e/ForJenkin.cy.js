//<refrence type ="cypress"/>
describe("Test Jenkin ", ()=>{
    it("This is for Jenkin",()=>{
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#datepicker").invoke("removeAttr", "target").click()
        cy.url().should("contain", "http://www.webdriveruniversity.com/Datepicker/index.html")
    })
})