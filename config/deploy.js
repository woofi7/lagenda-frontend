/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {},
    'revision-data': {
      type: 'git-commit'
    },
    's3': {
      bucket: 'elasticbeanstalk-us-east-2-793497163088',
      accessKeyId: 'AKIAI5YROKO5MQZIRH4A',
      secretAccessKey: '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',
      region: 'us-east-2'
    },

    's3-index': {
      bucket: 'elasticbeanstalk-us-east-2-793497163088',
      accessKeyId: 'AKIAI5YROKO5MQZIRH4A',
      secretAccessKey: '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',
      region: 'us-east-2'
    }
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';

    /*ENV.s3index = {
      accessKeyId: 'AKIAI5YROKO5MQZIRH4A',
      secretAccessKey: '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',
      bucket: 'elasticbeanstalk-us-east-2-793497163088',
      region: 'us-east-2'
    };*/

    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
