import Route from '@ember/routing/route';

export default class BaladosListRoute extends Route {
  model() {
    return this.store.findAll('balado-partner');
  }
}
