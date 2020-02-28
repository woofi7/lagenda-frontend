import Route from '@ember/routing/route';
import {get, set} from '@ember/object';

export default Route.extend({
  breadCrumb: null,

  async model(params) {
    return this.modelFor('balados.category').balados.findBy('id', Number(params.balado));
  },

  async afterModel(model) {
    const title = get(model, 'episodeNumber') + " - " +get(model, 'title');

    set(this, 'breadCrumb', {title});
  }
});
