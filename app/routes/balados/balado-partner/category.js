import Route from '@ember/routing/route';

export default class BaladosSuperCategoryCategoryRoute extends Route {
   async model(args) {
    return await this.store.findRecord('balado-category', args.category, {
      include: 'balados,image'
    });
  }
}
