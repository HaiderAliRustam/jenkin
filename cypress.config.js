const { defineConfig } = require("cypress");


module.exports = defineConfig({
  
  video: false,
  


 

  e2e: {
    setupNodeEvents(on, config) {
<<<<<<< HEAD
      require("cypress-mochawesome-reporter/plugin")(on);
      //haider
=======
   
>>>>>>> d098eea6957a105b0deecec484e22e2710dce57a
    },
  },

});
