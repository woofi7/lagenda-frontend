import Route from '@ember/routing/route';

export default class AdminImageEditRoute extends Route {
  model(params) {
    return this.store.findRecord('image', params.image);
  }
}
