describe("form testing", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });

  it("test subscribe form", () => {
    cy.contains(/Testing Forms/i).should("be.visible");
  });

  it("test subscribe form", () => {
    cy.getByDataTest("subscribe-input").type("r1@s.com");
    cy.contains(/Successfully subbed:/i).should("not.exist");
    cy.getByDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed:/i).should("exist");
    cy.getByDataTest("subscribe-input").should("have.value", "");
    cy.wait(3000);
    cy.contains(/Successfully subbed:/i).should("not.exist");

    //Failure case
    cy.getByDataTest("subscribe-input").type("r1@s.io");
    cy.contains(/invalid email:/i).should("not.exist");
    cy.getByDataTest("subscribe-button").click();
    cy.contains(/invalid email:/i).should("exist");
  });
});
