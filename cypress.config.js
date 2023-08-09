const { defineConfig } = require("cypress");
const tasks = require('./cypress/support/tasks');

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    baseUrl: 'https://www.boohoo.com/',
    setupNodeEvents(on, config) {
      on('task', tasks)
    },
  },
});
