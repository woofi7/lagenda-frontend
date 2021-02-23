import Route from '@ember/routing/route';

export default class LaTribuneCategoryV2Route extends Route {
  async model(args) {
    return await this.store.findRecord('article-category', args.category, {
      include: 'article-author-categories.articles,articles'
    });
  }
}
