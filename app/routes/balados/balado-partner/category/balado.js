import Route from '@ember/routing/route';
import {inject as service} from "@ember/service";

export default class BaladosSuperCategoryCategoryBaladoRoute extends Route {
  @service router;

  async model(args) {
    return this.store.findRecord('balado', args.balado);
  }
}
