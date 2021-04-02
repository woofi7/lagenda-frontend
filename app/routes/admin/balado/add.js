import Route from '@ember/routing/route';
import {inject as service} from "@ember/service";
import RSVP from "rsvp";

export default class AdminBaladoAddRoute extends Route {
  @service fastboot;

  async model() {
    let balado = this.fastboot.isFastBoot ? null : this.store.createRecord('balado');
    let baladoPartners = await this.store.findAll('balado-partner', {
      include: 'categories'
    });

    if (!this.fastboot.isFastBoot) {
      balado.postDatetime = new Date();
    }

    return RSVP.hash({
      balado,
      baladoPartners
    });
  }

  async renderTemplate(controller, model) {
    if (!this.fastboot.isFastBoot) {
      let controllerFor = this.controllerFor('admin.balado.edit');

      this.render('admin.balado.edit', {
        controller: controllerFor,
        model: model
      });
    }
  }
}
