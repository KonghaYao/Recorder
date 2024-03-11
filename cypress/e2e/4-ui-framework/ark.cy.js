/// <reference types="cypress" />

context('Actions', () => {
  it('Popover check: for random id test', () => {
    // Load "https://ark-ui.com/docs/components/popover"
    cy.visit('https://ark-ui.com/docs/components/popover');

    cy.wait(500); // wait for full load

    // Scroll wheel by X:0, Y:0
    cy.scrollTo(0, 0);

    // Click on <button> "Open Popover"
    cy.contains('Open Popover').realHover().realClick();

    // Click on <div> "Favorite Framework"
    cy.get('.popover__title')
      .should('be.visible')
      .should('contain', 'Favorite Framework');

    // Click on <div> "Favorite Framework"
    cy.get('.popover__title')
      .should('be.visible')
      .should('contain', 'Favorite Framework');

    // Click on <div> "Tell us what is your favo..."
    cy.get('.popover__description:nth-child(2)')
      .should('be.visible')
      .should('contain', 'Tell us what is your favorite framework');
  });
  it('Pinned input: input value code gen', () => {
    // Load "https://ark-ui.com/docs/components/pin-input"
    cy.visit('https://ark-ui.com/docs/components/pin-input');

    cy.wait(500); // wait for full load

    // Click on <input> [placeholder="0"]:nth-child(1)
    cy.get('[placeholder="0"]:nth-child(1)').click();

    // Fill "1" on <input> [aria-label="pin code 1 of 4"]
    cy.get('[aria-label="pin code 1 of 4"]').type('1');

    // Fill "2" on <input> [aria-label="pin code 2 of 4"]
    cy.get('[aria-label="pin code 2 of 4"]').type('2');

    // Fill "3" on <input> [aria-label="pin code 3 of 4"]
    cy.get('[aria-label="pin code 3 of 4"]').type('3');

    // Fill "7" on <input> [aria-label="pin code 4 of 4"]
    cy.get('[aria-label="pin code 4 of 4"]').type('7');
    // Click on <input> [placeholder="0"]:nth-child(1)
    cy.get('[placeholder="0"]:nth-child(1)')
      .should('be.visible')
      .should('have.value', '1');

    // Click on <input> [placeholder="0"]:nth-child(2)
    cy.get('[placeholder="0"]:nth-child(2)')
      .should('be.visible')
      .should('have.value', '2');

    // Click on <input> [placeholder="0"]:nth-child(3)
    cy.get('[placeholder="0"]:nth-child(3)')
      .should('be.visible')
      .should('have.value', '3');

    // Click on <input> [placeholder="0"]:nth-child(4)
    cy.get('[aria-label="pin code 4 of 4"]')
      .should('be.visible')
      .should('have.value', '7');
  });
});
