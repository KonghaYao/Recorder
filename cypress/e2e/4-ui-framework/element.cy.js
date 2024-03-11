/// <reference types="cypress" />

context('Actions', () => {
  it('Transfer: scroll check', () => {
    cy.visit('https://element.eleme.cn/2.0/#/zh-CN/component/transfer');

    cy.wait(100);
    cy.get('.page-component__scroll > .el-scrollbar__wrap').scrollTo(0, 0);

    // Click on <span> "取消"
    cy.get('.el-button--small:nth-child(1) > span')
      .filter(':visible')
      .filter(':contains("取消")')
      .click();

    cy.wait(400);
    // Scroll wheel by X:0, Y:0
    cy.get(
      '.demo-block:nth-child(3) .el-transfer-panel:nth-child(1) [aria-label="checkbox-group"]'
    ).scrollTo(0, 156);

    // Click on <span> "备选项 15"
    cy.get(
      '.demo-block:nth-child(3) .el-checkbox:nth-child(13) > .el-checkbox__label > span'
    )
      .filter(':visible')
      .filter(':contains("备选项 15")')
      .click();

    // Click on <span> "备选项 14"
    cy.get(
      '.demo-block:nth-child(3) .el-checkbox:nth-child(12) > .el-checkbox__label > span'
    )
      .filter(':visible')
      .filter(':contains("备选项 14")')
      .click();

    // Click on <button> .demo-block:nth-child(3) .el-button:nth-child(2)
    cy.get('.demo-block:nth-child(3) .el-button:nth-child(2)').click();

    cy.get('.page-component__scroll > .el-scrollbar__wrap').scrollTo(0, 0);

    // Click on <span> "备选项 14"
    cy.get(
      '.el-transfer-panel:nth-child(3) .el-checkbox:nth-child(3) > .el-checkbox__label > span'
    )
      .should('be.visible')
      .should('contain', '备选项 14');

    // Click on <span> "备选项 15"
    cy.get(
      '.el-transfer-panel:nth-child(3) .el-checkbox:nth-child(4) > .el-checkbox__label > span'
    )
      .should('be.visible')
      .should('contain', '备选项 15');
  });
  it('Dialog: hover class error check', () => {
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
  it('Popover: text content selector check', () => {
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
