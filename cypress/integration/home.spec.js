const BASE_URL = "localhost:3000"

describe("Casino lobby home page filtering functionality", () => {
    beforeEach(() => {
      cy.visit(BASE_URL);
    });
  
    it("should render 2 items when the search query is Viking", () => {
      cy.get("#search-bar").type("Viking").then(() => cy.get("#casino-lobby-list").children().should("have.length", 2));
    });

    it("should render all items when clearing the search input", () => {
      cy.get("#search-bar").type("A").type("{backspace}").then(() => cy.get("#casino-lobby-list").children().should("have.length", 141));
    });
  
    it("should render 41 items when clicking on Video Slots filter", () => {
      cy.get('#filter-bar').contains("Video Slots").click().then(() => cy.get("#casino-lobby-list").children().should("have.length", 41));
    });

    it("should render the RockStar game when clicking on Video Slots and Top Slots filters", () => {
      cy.get('#filter-bar').contains("Video Slots").click();
      cy.get('#filter-bar').contains("Top Slots").click().then(() => cy.get("#casino-lobby-list").children().within(() => cy.contains("RockStar")));
    });

    it("should render the Gold Rush game when clicking on Popular Games and searching for Gold", () => {
      cy.get('#filter-bar').contains("Popular Games").click();
      cy.get('#search-bar').type("Gold").then(() => cy.get("#casino-lobby-list").children().within(() => cy.contains("Gold Rush")));
    });

    it("should render all items when clearing the filters", () => {
      cy.get('#filter-bar').contains("Video Slots").click();
      cy.get('#clear-filters-btn').click().then(() => cy.get("#casino-lobby-list").children().should("have.length", 141))
    });

  });