import Route from '@ember/routing/route';

export default class AboutRoute extends Route {
  async model() {
    return this.store.query('author', {
      include: 'image,social-links',
      sort: 'order',
      filter: 'equals(collaborator,\'true\')'
    })
  }
}
