'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'lagenda',
    environment,
    rootURL: '/',
    locationType: 'auto',
    historySupportMiddleware: true,
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      },
    },

    APP: {
    },

    moment: {
      includeLocales: ['fr-ca'],
      allowEmpty: true,
    },

    apiHost: 'http://localhost:4200',

    fastboot: {
      hostWhitelist: [/^localhost:\d+$/]
    },

    torii: {
      sessionServiceName: 'session',
      providers: {
        'google-oauth2': {
          ***REMOVED***
          redirectUri: 'http://localhost:4200/torii/redirect.html',
          tokenExchangeUri: 'https://localhost:5001/api/v1/oauth2',
          scope: 'profile'
        }
      }
    },

    "ember-drag-drop-polyfill": {
      // These options are passed through to mobile-drag-drop
      mobileDragDrop: {
        enableEnterLeave: true,
        holdToDrag: 500, // Hold for 500ms until drag starts
      },
      // These options are used by ember-drag-drop-polyfill
      customOptions: {
        enableIOSHack: true, // Enable if targeting iOS Safari 10.x and higher, see https://github.com/timruffles/mobile-drag-drop/issues/77
        includeScrollBehavior: true // Sets the 'dragImageTranslateOverride' option in mobile-drag-drop
      }
    },
  };

  if (environment === 'production') {
    ENV.APP.API_HOST = 'https://lagenda.ca';
    ENV.apiHost = 'https://lagenda.ca';

    ENV.fastboot = {
      hostWhitelist: ['lagenda.ca']
    };

    ENV.torii.providers['google-oauth2'].redirectUri = 'https://lagenda.ca/torii/redirect.html';
    ENV.torii.providers['google-oauth2'].tokenExchangeUri = 'https://lagenda.ca/api/v1/oauth2';
  }

  if (environment === 'development') {
    ENV.APP.API_HOST = 'http://localhost:5000'
  }

  if (environment === 'test') {
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  return ENV;
};
