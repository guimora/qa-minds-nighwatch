const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');
const SCREENSHOT_PATH = ('e2e_reports/screenshots/');

require('nightwatch-cucumber')({
    cucumberArgs: ['--require', 'tests/step_definitions',
                   '--format', 'node_modules/cucumber-pretty', 
                   '--format', 'json:reports/cucumber.json',
                    'tests/features']
  });

module.exports = {
  output_folder: 'e2e-reports',
  custom_assertions_path: '',
  page_objects_path: 'pages',
  live_output: false,
  disable_colors: false,
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1',
    port: 4444
  },
  test_settings: {
    default: {
      launch_url: 'http://localhost:8087',
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      screenshots: {
        enabled: true,
        path: SCREENSHOT_PATH,
        on_failure: true,
        on_error: true
    },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        firefoxOptions: {
          //args: ['incognito', '--headless', 'no-sandbox', 'disable-gpu']       
        }
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromedriver.path
        }
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromedriver.path
        }
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        marionette: true
      },
      selenium: {
        cli_args: {
          'webdriver.gecko.driver': geckodriver.path
        }
      }
    }
  }
};