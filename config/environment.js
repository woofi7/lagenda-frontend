'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'lagenda',
    environment,
    rootURL: '/',
    locationType: 'auto',
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
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    cognito: {
      poolId: 'us-east-1_xGIcpazVj',
      clientId: '1voc9igkln094hkkk8dfm6r424'
    },

    api: {
      invokeUrl: '' // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod,
    },

    moment: {
      includeLocales: ['fr-ca'],
      allowEmpty: true,
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.s3 =  {

    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV['elastic-beanstalk'] = {
      bucket: 'elasticbeanstalk-us-east-2-793497163088'
    }
  }

  return ENV;
};
