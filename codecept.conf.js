module.exports.config = {
  tests: "./tests/*.js",
  output: "./output",
  helpers: {
    Playwright: {
      url: "https://data.fundraiseup.com",
      show: false,
      waitForNavigation: "load",
      windowSize: "1920x1080",
      waitForAction: 300,
      browser: "chromium",
    },
    FileSystem: {},
    Mochawesome: {
      uniqueScreenshotNames: "true",
    },
  },
  mocha: {
    reporterOptions: {
      reportDir: "output",
      json: false,
    },
  },
};
