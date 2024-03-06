const path = require('path');
module.exports = (on, config) => {
  const moduleDir = path.resolve(__dirname);

  on('before:browser:launch', (browser, launchOptions) => {
    // Electron does not support extensions
    launchOptions.extensions.push(path.join(moduleDir, 'build'));

    return launchOptions;
  });
};
