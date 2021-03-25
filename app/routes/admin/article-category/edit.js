import Route from '@ember/routing/route';
import RSVP from "rsvp";
import {A} from "@ember/array";

export default class AdminArticleCategoryEditRoute extends Route {
  async model(params) {
    let subCategories = A();

    const category = this.store.findRecord('article-category', params.category, {
      include: 'image,articles'
    }).then((c) => {
      subCategories.addObjects(c.get('articleAuthorCategories'));
      return c;
    });
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
}
