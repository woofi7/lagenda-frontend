import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { isBlank } from '@ember/utils';
import { timeout } from 'ember-concurrency';
import { tracked } from "@glimmer/tracking";
import { keepLatestTask } from 'ember-concurrency-decorators';

const DEBOUNCE_MS = 250;

export default class AdminController extends Controller {
  @service session;
  @service store;
  @service fastboot;
  @service image;

  @alias('session.data.authenticated.user_info') profile;

  @alias('model.articles') articles;
  @alias('model.authors') authors;
  @alias('model.balados') balados;

  @tracked imageSelected = null;

  @keepLatestTask *searchArticleTask (term) {
    if (isBlank(term) || term.length < 3)
      return [];

    yield timeout(DEBOUNCE_MS);

    return yield this.store.query('article', {
      filter: 'contains(title,\'' + term + '\')',
      sort: '-update-datetime'
    });
  }

  @keepLatestTask *searchBaladoTask (term) {
    if (isBlank(term) || term.length < 3)
      return [];

    yield timeout(DEBOUNCE_MS);

    return yield this.store.query('balado', {
      filter: 'contains(title,\'' + term + '\')',
      sort: '-update-datetime'
    });
  }
}
