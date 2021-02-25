import Route from '@ember/routing/route';

export default class LaTribuneCategoryV2AuthorListRoute extends Route {
  async model() {
    return this.modelFor('la-tribune.category-v2.author');
  }
}
