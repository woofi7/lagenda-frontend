import Route from '@ember/routing/route';
import {get, set} from '@ember/object';

export default Route.extend({
  breadCrumb: null,

  async model(params) {
    return this.modelFor('balados').findBy('id', Number(params.category));
  },

  async afterModel(model) {
    const title = get(model, 'name');

    set(this, 'breadCrumb', {title});
  }
});
