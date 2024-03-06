/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://chinese-font.netlify.app/');
    // Resize window to 1000 x 660
    cy.viewport(1000, 660);
  });
  it('Record Chinese in contain 1', () => {
    // Click on <a> "开始搜索"
    cy.get('[href="#font-list"]').click();

    // Click on <div> "如果你喜欢这款字体，可以点击进入详情页"
    cy.get('.text-purple-600').should(
      'contain',
      '如果你喜欢这款字体，可以点击进入详情页'
    );
  });

  it('Record Chinese in contain 2', () => {
    // Scroll wheel by X:0, Y:67
    cy.scrollTo(0, 2715);
    // Click on <a> "cn-font-split 字体分包性能 🔗"
    cy.get(
      '.text-2xl > [href="https://www.npmjs.com/package/@konghayao/cn-font-split"]'
    ).should('contain', 'cn-font-split 字体分包性能 🔗');
    // Scroll wheel by X:0, Y:-67
    cy.scrollTo(0, 2903);
  });
});
