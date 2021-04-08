import Route from '@ember/routing/route';
import RSVP from "rsvp";

export default class AdminBaladoCategoryEditRoute extends Route {
  async model(params) {
    let category = await this.store.findRecord('balado-category', params.category, {
      include: 'image,partner'
    });
    let partners = await this.store.findAll('balado-partner');

    return RSVP.hash({
      category,
      partners
    });
  }
}
