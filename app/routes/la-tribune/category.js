import Route from '@ember/routing/route';

export default class LaTribuneCategoryRoute extends Route {
  async model() {
    return this.modelFor('la-tribune');
  }
}
