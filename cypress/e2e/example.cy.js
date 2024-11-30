describe("form testing", () => {
  beforeEach(() => {
    cy.visit("/examples");
  });

  it("multi page testing", () => {
    cy.getByDataTest("nav-why-cypress").click();
    cy.location("pathname").should("equal", "/");

    cy.getByDataTest("nav-overview").click();
    cy.location("pathname").should("equal", "/overview");

    cy.getByDataTest("nav-fundamentals").click();
    cy.location("pathname").should("equal", "/fundamentals");

    cy.getByDataTest("nav-forms").click();
    cy.location("pathname").should("equal", "/forms");

    cy.getByDataTest("nav-examples").click();
    cy.location("pathname").should("equal", "/examples");

    cy.getByDataTest("nav-component").click();
    cy.location("pathname").should("equal", "/component");

    cy.getByDataTest("nav-best-practices").click();
    cy.location("pathname").should("equal", "/best-practices");
  });

  it("intercepts", () => {
    cy.intercept("POST", "http://localhost:3000/examples", {
      statusCode: 200,
      fixture: "example.json"
    }).as("postData");

    cy.getByDataTest("post-button").click();
  });

  it.only("Grudges", () => {
    cy.contains(/add some grudge/i);

    cy.getByDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 0);
    });

    cy.getByDataTest("grudge-input").within(() => {
      cy.get("input").type("some grudge");
    });
    cy.getByDataTest("grudge-button").click();
    cy.getByDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 1);
      cy.get("li").its("0").should("contain.text", "some grudge");
      cy.get("li").within(() => {
        cy.get("button").click();
      });
    });
    cy.getByDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 0);
    });

    // Adding another grudge
    cy.getByDataTest("grudge-input").within(() => {
      cy.get("input").type("another grudge");
    });
    cy.getByDataTest("grudge-button").click();
    cy.getByDataTest("clear-grudges").click();
    cy.getByDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 0);
    });

    // cy.intercept("GET", "http://localhost:3000/grudges", {
    //   statusCode: 200,
    //   fixture: "grudges.json"
    // }).as("getGrudges");

    // cy.visit("/examples");

    // cy.getByDataTest("get-grudges").click();

    // cy.wait("@getGrudges").then((interception) => {
    //   console.log(interception.response.body);
    // });
  });
});
