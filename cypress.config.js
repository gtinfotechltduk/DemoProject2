const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    baseUrl: "https://demoblaze.com/",
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
    blockHosts: ['https://pagead2.googlesyndication.com/*'],
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'results/my-test-output.xml',
      toConsole: true,
    },
    // reporter: 'cypress-html-reporter',
    // reporterOptions: {
    //   // Specify the output directory for the HTML report
    //   reportDir: 'results',
    //   overwrite: false,
    //   html: true,
    //   json: false,
  },
});