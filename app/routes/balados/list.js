import Route from '@ember/routing/route';

export default class BaladosListRoute extends Route {

  model(params, transition) {
    return this.store.findAll('balado-category', {
      include: 'balados'
    });
  }

}
