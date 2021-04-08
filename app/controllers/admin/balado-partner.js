import Controller from '@ember/controller';
import {alias} from "@ember/object/computed";
import {tracked} from "@glimmer/tracking";
import {action, computed} from "@ember/object";
import {A} from "@ember/array";
import {inject as service} from "@ember/service";

export default class AdminBaladoPartnerController extends Controller {
  @service router;

  @alias('model.baladoPartners') partners;

  @tracked canSave = false;

  @computed('partners.length')
  get sortablePartnersList() {
    return A(this.partners.map(c => c));
  }

  @action
  dragEndAction() {
    this.canSave = true;
  }

  @action
  closeModal() {
    this.router.transitionTo('admin');
  }

  @action
  async save() {
    this.notifications.info('Sauvegarde des données en cours . . .');
    try {
      for (let i = 0; i < this.sortablePartnersList.length; i++) {
        let p = this.sortablePartnersList.get(i);
        p.set('order', i * 10);
        await p.save();
      }

      this.notifications.clearAll().success('Catégories modifiées avec succès!', {
        autoClear: true
      });
    } catch (e) {
      this.notifications.clearAll().error(`<p>Une erreur est survenue lors de la sauvegarde :<br> <code class="text-white">${e.toString()}</code></p>`, {
        htmlContent: true
      });
    }
  }
}
