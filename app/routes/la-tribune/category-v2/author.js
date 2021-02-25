import Route from '@ember/routing/route';

export default class LaTribuneCategoryV2AuthorRoute extends Route {
  async model(args) {
    return this.store.findRecord('article-author-category', args.author, {
      includes: 'articles.article-category,articles.article-author-category'
    });
  }
}
