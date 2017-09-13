/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'esw-index': {
      version: '0.0.3'
    },
    fingerprint: {
      exclude: ['apple-touch-icon', 'favicon', 'mstile']
    },
    sassOptions: {
      includePaths: [
        'bower_components/materialize/sass'
      ]
    }
  });

  if ((process.env.EMBER_CLI_FASTBOOT !== 'true')) {
    app.import('bower_components/materialize/bin/materialize.js');
    app.import("bower_components/jquery.terminal/js/jquery.terminal.js");
    app.import("bower_components/jquery.terminal/js/jquery.mousewheel-min.js");
    app.import("bower_components/jquery.terminal/css/jquery.terminal.css");
  }

  return app.toTree();
};
