import Route from '@ember/routing/route';

export default class BaladosListRoute extends Route {
  async model() {
    return this.modelFor('balados');
  }
}
