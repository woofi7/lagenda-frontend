import Route from '@ember/routing/route';
import {get, set} from '@ember/object';

export default Route.extend({
  breadCrumb: null,

  async model(args) {
    return this.store.findRecord('balado', args.balado);
  },

  async afterModel(model) {
    const title = get(model, 'episodeNumber') + " - " + get(model, 'title');

    set(this, 'breadCrumb', {title});
  }
});
