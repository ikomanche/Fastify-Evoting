const nconf = require('nconf')
const server = require('./server')
const { loadSettings } = require('./config/configurationAdaptor')

const appSettingsPath = require('./config/appSettings.json')

loadSettings({ appSettingsPath })
  .then(() => {
    const serverOptions = {
      logSeverity: nconf.get('logSeverity')
    }
    server.createServer(serverOptions)
  })
  .catch(err => {
    console.log(err)
  })
//test for git