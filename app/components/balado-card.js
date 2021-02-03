import Component from '@glimmer/component';
import {computed} from "@ember/object";
import {inject as service} from "@ember/service";

export default class BaladoCardComponent extends Component {
  @service router;

  @computed('router.currentURL')
  get isActive() {
    return this.router.isActive('balados.balado-partner.category.balado', this.args.balado.id);
  }
}
