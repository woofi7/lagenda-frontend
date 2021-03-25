import Route from '@ember/routing/route';
import RSVP from "rsvp";

export default class AdminArticleCategoryRoute extends Route {
  async model(params) {
    let articleCategories = await this.store.query('article-category', {
      include: 'image,article-author-categories',
      filter: 'equals(is-partner,\'false\')',
    });

    let articleAuthorCategories = await this.store.query('article-category', {
      include: 'image,article-author-categories',
      filter: 'equals(is-partner,\'true\')',
    });
    await articleAuthorCategories.map((c) => c.get('articleAuthorCategories'));

    return RSVP.hash({
      articleCategories,
      articleAuthorCategories
    });
  }
}
