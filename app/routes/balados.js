import Route from '@ember/routing/route';

export default Route.extend({
  breadCrumb: {
    title: 'Catégories'
  },

  model() {
    return this.store.findAll('balado-category');
  }
});
