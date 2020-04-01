import Route from '@ember/routing/route';

export default class LaTribuneCategoryListRoute extends Route {
  async model() {
    return this.modelFor('la-tribune.category');
  }
}
