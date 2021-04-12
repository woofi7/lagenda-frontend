import Route from '@ember/routing/route';
import {inject as service} from "@ember/service";
import RSVP from "rsvp";

export default class AdminAuthorAddRoute extends Route {
  @service fastboot;

  async model() {
    let author = this.fastboot.isFastBoot ? null : this.store.createRecord('author');

    return RSVP.hash({
      author
    });
  }

  async renderTemplate(controller, model) {
    if (!this.fastboot.isFastBoot) {
      let controllerFor = this.controllerFor('admin.author.edit');

      this.render('admin.author.edit', {
        controller: controllerFor,
        model: model
      });
    }
  }
}
