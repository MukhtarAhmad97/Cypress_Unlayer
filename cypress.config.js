// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {

//       // implement node event listeners here
//     },
//     defaultCommandTimeout: 100000,
//     pageLoadTimeout: 120000,
//   },
// });






// const fs = require('fs');
// const path = require('path');
// const AdmZip = require('adm-zip');

// module.exports = {
//   e2e: {
//     setupNodeEvents(on, config) {
//       // Task to create a directory if it doesn't exist
//       on('task', {
//         createDir(dirPath) {
//           if (!fs.existsSync(dirPath)) {
//             fs.mkdirSync(dirPath, { recursive: true });
//           }
//           return null; // Return null to indicate successful directory creation
//         },
        
//         // Task to extract a ZIP file
//         extractZip({ zipFilePath, outputPath }) {
//           try {
//             if (!fs.existsSync(outputPath)) {
//               fs.mkdirSync(outputPath, { recursive: true });
//             }

//             const zip = new AdmZip(zipFilePath);
//             zip.extractAllTo(outputPath, true);
//             return `Extracted to: ${outputPath}`;
//           } catch (err) {
//             throw new Error(`Error while extracting zip file: ${err.message}`);
//           }
//         },

        
//         getFiles(dirPath) {
//           try {
//             return fs.readdirSync(dirPath); 
//           } catch (err) {
//             throw new Error(`Error reading directory: ${err.message}`);
//           }
//         },
//       });

//       return config;
//     },
//     defaultCommandTimeout: 100000,
//     pageLoadTimeout: 120000,
//   },
// };




const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // Register the tasks
      on('task', {
        // Task to create a directory if it doesn't exist
        createDir(dirPath) {
          if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
          }
          return null;
        },

        // Task to extract a ZIP file
        extractZip({ zipFilePath, outputPath }) {
          try {
            if (!fs.existsSync(outputPath)) {
              fs.mkdirSync(outputPath, { recursive: true });
            }

            const zip = new AdmZip(zipFilePath);
            zip.extractAllTo(outputPath, true);
            return `Extracted to: ${outputPath}`;
          } catch (err) {
            throw new Error(`Error while extracting zip file: ${err.message}`);
          }
        },

        // Task to get a list of files in a directory
        getFiles(dirPath) {
          try {
            return fs.readdirSync(dirPath);
          } catch (err) {
            throw new Error(`Error reading directory: ${err.message}`);
          }
        },
      });

      return config;
    },
    defaultCommandTimeout: 100000,
    pageLoadTimeout: 120000,
  },
};
