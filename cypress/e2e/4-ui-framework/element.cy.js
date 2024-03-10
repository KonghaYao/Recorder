/// <reference types="cypress" />

context('Actions', () => {
  it('hover class error check', () => {
    cy.visit('https://element.eleme.cn/2.0/#/zh-CN/component/dialog');
    // Click on <span> "取消"
    cy.get('.el-button--small:nth-child(1) > span')
      .filter(':visible')
      .filter(':contains("取消")')
      .click();

    // Click on <span> "点击打开 Dialog"
    cy.get('.demo-block:nth-child(5) > .source > .el-button > span')
      .filter(':visible')
      .filter(':contains("点击打开 Dialog")')
      .click();

    // Click on <span> "确 定"
    cy.get('.el-dialog__footer:nth-child(3) .el-button--primary > span')
      .filter(':visible')
      .filter(':contains("确 定")')
      .click();
  });
  it('text content selector check', () => {
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
  });
});
