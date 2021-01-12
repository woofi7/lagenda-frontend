import Route from '@ember/routing/route';

export default class AboutAuthorRoute extends Route {
  model(params) {
    return this.store.findRecord('author', params.author, {
      include: 'articles.article-category'
    });
  }
}
