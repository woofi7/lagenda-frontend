import Route from '@ember/routing/route';
import RSVP from "rsvp";
import {inject as service} from "@ember/service";

export default class AdminArticleAddRoute extends Route {
  @service fastboot;

  async model() {
    let article = this.fastboot.isFastBoot ? null : this.store.createRecord('article');
    let authors = await this.store.findAll('author');
    let articleCategories = this.store.findAll('article-category', {
      include: 'article-author-categories',
      reload: true
    });

    if (!this.fastboot.isFastBoot) {
      article.postDatetime = new Date();
    }

    return RSVP.hash({
      article,
      authors,
      articleCategories
    });
  }

  async renderTemplate(controller, model) {
    if (!this.fastboot.isFastBoot) {
      let controllerFor = this.controllerFor('admin.article.edit');

      this.render('admin.article.edit', {
        controller: controllerFor,
        model: model
      });
    }
  }
}
