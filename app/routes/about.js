import Route from '@ember/routing/route';

export default class AboutRoute extends Route {
  async model() {
    return this.store.findAll('author');
  }
}
