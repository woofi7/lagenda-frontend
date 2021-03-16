import Route from '@ember/routing/route';
import RSVP from "rsvp";

export default class AdminArticleEditRoute extends Route {
  async model(params) {
    let article = await this.store.findRecord('article', params.article, {
      include: 'article-author-category,article-category'
    });
    let authors = this.store.findAll('author');
    let articleCategories = await this.store.findAll('article-category', {
      include: 'article-author-categories'
    });
    await articleCategories.map((c) => c.get('articleAuthorCategories'));

    return RSVP.hash({
      article,
      authors,
      articleCategories
    });
  }
}
