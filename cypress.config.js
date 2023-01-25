const { defineConfig } = require("cypress");


module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  video: false,
  screenshotsFolder: false,



  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },

});
