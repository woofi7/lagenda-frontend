import Route from '@ember/routing/route';

export default class LaTribuneCategoryV2ListRoute extends Route {
  async model() {
    return this.modelFor('la-tribune.category-v2');
  }
}
