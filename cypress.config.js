const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('./index.js')(on, config);
    },
  },
  viewportWidth: 1280, // 浏览器窗口宽度
  viewportHeight: 720, // 浏览器窗口高度
  watchForFileChanges: false,
  scrollBehavior: 'center',
});
