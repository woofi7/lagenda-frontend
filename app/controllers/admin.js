import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action, computed } from "@ember/object";
import { alias } from '@ember/object/computed';
import { isBlank } from '@ember/utils';
import { timeout } from 'ember-concurrency';
import { tracked } from "@glimmer/tracking";
import { keepLatestTask } from 'ember-concurrency-decorators';


const DEBOUNCE_MS = 250;

export default class AdminController extends Controller {
  @service session;
  @service store;

  @alias('session.data.authenticated.user_info') profile;

  @alias('model.articles') articles;
  @alias('model.authors') authors;
  @alias('model.balados') balados;

  @tracked imageSelected = null;

  @tracked imageSize = null;

  gcd (a, b) {
    return (b == 0) ? a : this.gcd (b, a%b);
  }

  @action
  changeImageSelected(image) {
    this.imageSize = null;
    this.imageSelected = image;
    this.fetchImageData.perform();
  }

  @keepLatestTask *fetchImageData() {
    let img = new Image();
    img.onload = yield () => {
      const gcd = this.gcd(img.width, img.height);
      const ratio = img. width / gcd + ":" + img.height / gcd;

      this.set('imageSize', {width: img.width, height: img.height, ratio });

    };
    img.src = this.image.url;
  }

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

  @keepLatestTask *searchImageTask (term) {
    if (isBlank(term) || term.length < 3)
      return [];

    yield timeout(DEBOUNCE_MS);

    return yield this.store.query('image', {
      filter: 'contains(url,\'' + term + '\')',
      page: {
        size: 20
      }
    });
  }
}
