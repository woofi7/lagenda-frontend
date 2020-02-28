import Route from '@ember/routing/route';

export default Route.extend({
  breadCrumb: null,

  async model() {
    return this.modelFor('balados.category');
  }
});
