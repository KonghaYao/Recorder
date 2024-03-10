/// <reference types="cypress" />

context('Actions', () => {
  it('', () => {
    cy.visit('https://element.eleme.cn/2.0/#/zh-CN/component/popover');
    // Click on <span> "取消"
    cy.get('div:nth-child(3) > button:nth-child(1) > span')
      .filter(':visible')
      .filter(':contains("取消")')
      .click();

    // Click on <span> "hover 激活"
    cy.get('div:nth-child(1) > button:nth-child(3) > span')
      .filter(':visible')
      .filter(':contains("hover 激活")')
      .click();

    // Click on <span> "click 激活"
    cy.get('button:nth-child(4) > span')
      .filter(':visible')
      .filter(':contains("click 激活")')
      .click();

    // Click on <div> "标题"
    cy.get('#el-popover-3433 > div:nth-child(1)').should('contain', '标题');
  });
});
