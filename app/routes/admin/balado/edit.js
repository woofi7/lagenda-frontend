import Route from '@ember/routing/route';
import RSVP from "rsvp";

export default class AdminBaladoEditRoute extends Route {
  async model(params) {
    let balado = await this.store.findRecord('balado', params.balado, {
      include: 'balado-category.partner'
    });
    let baladoPartners = await this.store.findAll('balado-partner', {
      include: 'categories'
    });

    return RSVP.hash({
      balado,
      baladoPartners
    });
  }
}
