import Route from '@ember/routing/route';
import RSVP from "rsvp";

export default class AdminBaladoPartnerEditRoute extends Route {
  async model(params) {
    let partner = await this.store.findRecord('balado-partner', params.category, {
      include: 'categories'
    });

    return RSVP.hash({
      partner
    });
  }
}
