import Route from '@ember/routing/route';

export default class LaTribuneCategoryRoute extends Route {
  async model(args) {
    return this.store.findRecord('article-category', args.category);
  }
}
