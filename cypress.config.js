const { defineConfig } = require('cypress')
const registerDataSession = require('cypress-data-session/src/plugin')
const cypressSplit = require('cypress-split')

module.exports = defineConfig({
  env: {
    users: {
      standard: {
        username: 'standard_user',
        password: 'secret_sauce',
      },
      lockedOut: {
        username: 'locked_out_user',
        password: 'secret_sauce',
      },
      problem: {
        username: 'problem_user',
        password: 'secret_sauce',
      },
      glitch: {
        username: 'performance_glitch_user',
        password: 'secret_sauce',
      },
    },
  },

  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    fixturesFolder: 'cypress/fixtures',
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // and load any plugins that require the Node environment
      registerDataSession(on, config)
      cypressSplit(on, config)
      // IMPORTANT: return the config object
      return config
    },
  },

  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
})
