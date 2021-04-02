import Route from '@ember/routing/route';
import {inject as service} from "@ember/service";
import RSVP from "rsvp";
import {A} from "@ember/array";

export default class AdminArticleCategoryAddRoute extends Route {
  @service fastboot;

  async model() {
    let subCategories = A();

    let category = this.fastboot.isFastBoot ? null : this.store.createRecord('article-category');

    const categories = this.store.findAll('article-category', {
      include: 'articles'
    });
    const authorCategories = this.store.findAll('article-author-category', {
      include: 'articles'
    });
    return RSVP.hash({
      category,
      categories,
      authorCategories,
      subCategories
    });
  }

  async renderTemplate(controller, model) {
    if (!this.fastboot.isFastBoot) {
      let controllerFor = this.controllerFor('admin.article-category.edit');

      this.render('admin.article-category.edit', {
        controller: controllerFor,
        model: model
      });
    }
  }
}
