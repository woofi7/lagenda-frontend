import Controller from '@ember/controller';
import {alias, sort} from "@ember/object/computed";
import {action, computed} from "@ember/object";
import {inject as service} from "@ember/service";
import {A} from "@ember/array";

export default class AdminBaladoPartnerEditController extends Controller {
  @service fastboot;
  @service router;
  @service image;

  @alias('model.partner') partner;

  @computed('partner.id')
  get partnerUrl() {
    if (!this.partner.get('id'))
      return null;

    const host = this.fastboot.isFastBoot ? this.fastboot.request.host : window.location.host;
    return host + this.router.urlFor('balados.balado-partner', this.partner.id);
  }

  sortKey = ['order:asc'];
  @sort('partner.categories', 'sortKey') categories;

  @computed('categories')
  get sortableCategoriesList() {
    return A(this.categories.map(c => c));
  }

  @computed('partner.image.url')
  get loadImageSize() {
    this.image.imageUrl = this.partner.get('image.url');
    return null;
  }

  @action
  closeModal() {
    this.router.transitionTo('admin');
  }

  @action
  toggleUnlisted() {
    this.partner.unlisted = !this.partner.unlisted;
  }

  @action
  async submit(form) {
    this.notifications.info('Sauvegarde des données en cours . . .');
    try {
      for (let i = 0; i < this.partner.categories.length; i++) {
        let c = this.sortableCategoriesList.get(i);

        c.set('order', i * 10);
        await c.save();
      }

      await form.save()
        .then(() => {
          this.notifications.clearAll().success('Partenaire modifié avec succès!', {
            autoClear: true
          });
        });
    } catch (e) {
      this.notifications.clearAll().error(`<p>Une erreur est survenue lors de la sauvegarde :<br> <code class="text-white">${e.toString()}</code></p>`, {
        htmlContent: true
      });
    }
  }
}
