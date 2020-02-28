import Route from '@ember/routing/route';

export default class LaTribuneCategoryRoute extends Route {
  async model(params) {
    return this.modelFor('la-tribune').findBy('id', Number(params.category));
  }
}
