import Route from '@ember/routing/route';

export default class BaladosSuperCategoryRoute extends Route {
  async model(args) {
    return this.store.findRecord('balado-partner', args.partner, {
      include: 'categories.image'
    });
  }
}
