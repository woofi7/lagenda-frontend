import Route from '@ember/routing/route';

export default class LaTribuneCategoryArticleRoute extends Route {
  model(args) {
    this.replaceWith('la-tribune.category-v2.article', args.article);
  }
}
