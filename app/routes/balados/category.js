import Route from '@ember/routing/route';
import {get, set} from '@ember/object';

export default Route.extend({
  breadCrumb: null,

  async model(args) {
    return this.store.findRecord('balado-category', args.category);
  },

  async afterModel(model) {
    const title = get(model, 'name');

    set(this, 'breadCrumb', {title});
  }
});
