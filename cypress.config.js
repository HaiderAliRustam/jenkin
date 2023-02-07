const { defineConfig } = require("cypress");


module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  video: false,

  reporterOptions: {
    charts: true,
    reportPageTitle: "Haider-Report",
    reportFilename: "haider",
    embeddedScreenshots: true,
    inlineAssets: true,
    showPassed: true,
    saveAllAttempts: false,
    fileName: "new_report_name",
    index: "new_index.html"
    
    
  },
  

  e2e: {

    setupNodeEvents(on, config) {

      require("cypress-mochawesome-reporter/plugin")(on);

    },
  },

});
