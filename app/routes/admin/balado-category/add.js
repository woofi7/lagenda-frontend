import Route from '@ember/routing/route';
import {inject as service} from "@ember/service";
import RSVP from "rsvp";

export default class AdminBaladoCategoryAddRoute extends Route {
  @service fastboot;

  async model() {
    let category = this.fastboot.isFastBoot ? null : this.store.createRecord('balado-category');

    return RSVP.hash({
      category
    });
  }

  async renderTemplate(controller, model) {
    if (!this.fastboot.isFastBoot) {
      let controllerFor = this.controllerFor('admin.balado-category.edit');

      this.render('admin.balado-category.edit', {
        controller: controllerFor,
        model: model
      });
    }
  }
}
