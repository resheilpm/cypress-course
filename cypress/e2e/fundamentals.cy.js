describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/fundamentals");
  });
  it("Contains correct header text", () => {
    // cy.get('[data-test="fundamentals-header"]').should(
    //   "have.text",
    //   "Testing Fundamentals"
    // );
    cy.getByDataTest("accordian-item-1").should("exist");
  });
  it("Accordian works correctly", () => {
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
    // Make sure we are clicking on correct item
    // cy.get('[data-test="accordian-item-1"] div[role="button"]').click();
    cy.getByDataTest("accordian-item-1", 'div[role="button"]').click();

    cy.contains(/Your tests will exist in a describe block/i).should(
      "be.visible"
    );
    cy.getByDataTest("accordian-item-1", 'div[role="button"]').click();
    // cy.get('[data-test="accordian-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
  });
});
