const config = require('./protractor.conf').config;

config.capabilities = {
    browserName: 'chrome',
    chromeOptions: {
        args: ['--headless', '--no-dansbox']
    }
}

exports.config = config;