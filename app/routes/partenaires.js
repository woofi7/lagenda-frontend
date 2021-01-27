import Route from '@ember/routing/route';

export default class PartenairesRoute extends Route {
  async model() {
    return this.store.query('author', {
      sort: 'order',
      filter: 'equals(partner,\'true\')'
    })
  }
}
