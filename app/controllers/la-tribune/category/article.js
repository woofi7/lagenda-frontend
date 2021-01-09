import Controller from '@ember/controller';
import {alias} from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class LaTribuneCategoryArticleController extends Controller {
  @service router;
  @service fastboot;

  @alias('model.article') article;

  getUrl() {
    let currentUrl;
    if (this.fastboot.isFastboot) {
      currentUrl = document.location.href;
    }
    else {
      currentUrl = 'https://lagenda.ca/';
    }

    if (!currentUrl.includes('lagenda.ca'))
      currentUrl = 'https://lagenda.ca/';

    return currentUrl;
  }

  get sentUrl() {
    return this.getUrl() + '?infolettre=sent';
  }

  get errorUrl() {
    return this.getUrl() + '?infolettre=error';
  }

  get successUrl() {
    return 'https://lagenda.ca/?infolettre=success';
  }
}
