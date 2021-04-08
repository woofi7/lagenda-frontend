import Route from '@ember/routing/route';
import {inject as service} from "@ember/service";
import RSVP from "rsvp";

export default class AdminBaladoPartnerAddRoute extends Route {
  @service fastboot;

  async model() {
    let partner = this.fastboot.isFastBoot ? null : this.store.createRecord('balado-partner');

    return RSVP.hash({
      partner
    });
  }

  async renderTemplate(controller, model) {
    if (!this.fastboot.isFastBoot) {
      let controllerFor = this.controllerFor('admin.balado-partner.edit');

      this.render('admin.balado-partner.edit', {
        controller: controllerFor,
        model: model
      });
    }
  }
}
