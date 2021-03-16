import Route from '@ember/routing/route';

export default class AdminImageEditRoute extends Route {
  model(params, transition) {
    return this.store.findRecord('image', params.image);
  }
}
