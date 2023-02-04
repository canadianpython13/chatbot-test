const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true, 
    reportPageTitle: 'Snatchbot convo responses test',
    embeddedScreenshots: true,
  },
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    "baseUrl": "https://snatchbot.me/",
  },
});
