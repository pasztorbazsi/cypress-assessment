const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    blockHosts: [ 
      "www.googletagmanager.com", 
      "analytics.google.com", 
      "www.google-analytics.com" 
    ],
    baseUrl: 'https://www.saucedemo.com',
    supportFile: 'cypress/support/commands.js',
    pageLoadTimeout: 120000
  }
});