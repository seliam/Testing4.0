const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.krcs.co.uk/',
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
  env: {
    baseUrl: 'https://www.krcs.co.uk/'
  }
});
