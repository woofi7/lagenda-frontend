import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'https://lagenda.ca';
 // host = 'http://localhost:5000';
  namespace = 'api/v1';
}
