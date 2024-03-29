const { defineConfig } = require('cypress')
const fs = require('fs')


module.exports = defineConfig({
  env:{
    appUrl:'cypress/test.html'
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'EndToEnd Test',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // on('after:screenshot', (details) => {
      //   console.log('Capturing screenshot') // print all details to terminal

      //   const newPath = 'screenshot.png'

      //   return new Promise((resolve, reject) => {
      //     // fs.rename moves the file to the existing directory 'new/path/to'
      //     // and renames the image to 'screenshot.png'
      //     fs.rename(details.path, newPath, (err) => {
      //       if (err) return reject(err)

      //       // because we renamed and moved the image, resolve with the new path
      //       // so it is accurate in the test results
      //       resolve({ path: newPath })
      //     })
      //   })
      // })
    },
  },
})