import Route from '@ember/routing/route';

export default class AboutRoute extends Route {
  async model() {
    return this.store.query('author', {
      filter: 'equals(collaborator,\'true\')'
    })
  }
}
