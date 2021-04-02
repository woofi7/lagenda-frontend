import Controller from '@ember/controller';
import {inject as service} from "@ember/service";
import {alias} from "@ember/object/computed";
import {tracked} from "@glimmer/tracking";
import {htmlSafe} from "@ember/template";

export default class LaTribuneCategoryV2ArticleController extends Controller {
  @service router;
  @service fastboot;
  @service store;

  @alias('model.article') article;

  @tracked submitText = false;

  get articleContent() {
    return htmlSafe(this.article.content);
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

  getUrl() {
    let currentUrl;
    if (this.fastboot.isFastBoot) {
      currentUrl = document.location.href;
    }
    else {
      currentUrl = 'https://lagenda.ca/';
    }

    if (!currentUrl.includes('lagenda.ca'))
      currentUrl = 'https://lagenda.ca/';

    return currentUrl;
  }
}
