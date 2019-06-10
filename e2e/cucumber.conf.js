const { browser, ProtractorBrowser } = require('protractor');
var webdriver = require('selenium-webdriver');
var steps = require('./test/steps/steps')

exports.config = {
    SELENIUM_PROMISE_MANAGER: false,
    allScriptsTimeout: 11000,
    
    capabilities: {
      'browserName': 'chrome'
    },
    //directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout : 500000,
    getDefaultTimeout : 300000,
    baseUrl: 'https://angular.io/',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        //'./src/**/*.e2e-spec.ts',
        './test/**/*.feature'
      ],
    cucumberOpts: {
        //require: ['./cucumber/*.js'],  // require step definition files before executing features
        require: ['./test/steps/steps.js'],// ['./test/**/*.js'],
        tags: ['@sanity'], 
        strict: true,                  // <boolean> fail if there are any undefined or pending steps
        format: 'json',            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        //'dry-run': false,              // <boolean> invoke formatters without executing steps
        //compiler: []          
        keepAlive : false, 
    },
    //framework: 'jasmine',
    // jasmineNodeOpts: {
    //   showColors: true,
    //   defaultTimeoutInterval: 30000,
    //   print: function() {}
    // },
    onPrepare : function() {
        
      
        console.log("inside onprepare")
      
      //browser.waitForAngular('false');
      //ProtractorBrowser.prototype.waitForAngular = false;
      
    //   require('ts-node').register({
    //     project: require('path').join(__dirname, './tsconfig.json')
    //   });
      //jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    }
};
