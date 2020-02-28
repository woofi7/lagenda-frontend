import Route from '@ember/routing/route';

export default class LaTribuneCategoryArticleRoute extends Route {
  async model(params) {
    return this.modelFor('la-tribune.category').articles.findBy('id', Number(params.article))
  }
}
