import Route from '@ember/routing/route';
import RSVP from "rsvp";

export default class AdminBaladoPartnerRoute extends Route {
  async model() {
    let baladoPartners = await this.store.query('balado-partner', {
      include: 'image',
    });

    return RSVP.hash({
      baladoPartners
    });
  }
}
