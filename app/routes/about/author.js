import Route from '@ember/routing/route';

export default class AboutAuthorRoute extends Route {
  model(params, transition) {
    return this.store.findRecord('author', params.author, {
      include: 'articles.article-category'
    });
  }
}
