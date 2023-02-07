const { defineConfig } = require("cypress");


module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  video: false,

  reporterOptions: {
    charts: true,
    reportPageTitle: "Haider-Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    showPassed: false,
    saveAllAttempts: false,
  },

 

  e2e: {
<<<<<<< HEAD
    setupNodeEvents(on, config) 
    {

      require("cypress-mochawesome-reporter/plugin")(on);
 
=======
    setupNodeEvents(on, config) {

      require("cypress-mochawesome-reporter/plugin")(on);

>>>>>>> 586e5dc5eb49d3c840df3597b5d67a940f10ec45
    },
  },

});
