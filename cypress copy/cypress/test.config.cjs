const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'a3macv',
  e2e: {
    baseUrl: 'https://www.krcs.co.uk/',
    supportFile: false,
  },
  env: {
    baseUrl: 'https://www.krcs.co.uk/'
  }
});
