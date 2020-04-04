// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  
  specs: [
    './src/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
    // chromeOptions: {
    //   binary: process.env.CHROME_BIN,
    //   args: ['--headless', '--no-sandbox']
    //   }
  },
  directConnect: true,
  "remote": {
    "baseUrl": 'https://alexandraciausu-a6df7.firebaseapp.com'
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    // defaultTimeoutInterval: 30000,
    print: function() {}
  },
  getPageTimeout: 30000,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: 'testresults',
        filePrefix: 'xmloutput'
    }));
    setTimeout(function() {
      browser.driver.executeScript(function() {
          return {
              width: window.screen.availWidth,
              height: window.screen.availHeight
          };
      }).then(function(result) {
          browser.driver.manage().window().setSize(result.width, result.height);
      });
  });
  jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
