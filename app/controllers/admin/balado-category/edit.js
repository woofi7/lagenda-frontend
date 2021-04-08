import Controller from '@ember/controller';
import {inject as service} from "@ember/service";
import {alias} from "@ember/object/computed";
import {action, computed} from "@ember/object";

export default class AdminBaladoCategoryEditController extends Controller {
  @service fastboot;
  @service router;
  @service image;

  @alias('model.category') category;
  @alias('model.partners') partners;

  @computed('category.id', 'category.partner.id')
  get categoryUrl() {
    if (!this.category.id)
      return;

    const host = this.fastboot.isFastBoot ? this.fastboot.request.host : window.location.host;
    return host + this.router.urlFor('balados.balado-partner.category',
      this.category.get('partner.id'),
      this.category.id);
  }

  @computed('category.image.url')
  get loadImageSize() {
    this.image.imageUrl = this.category.get('image.url');
  }

  @action
  closeModal() {
    this.router.transitionTo('admin');
  }

  @action
  toggleUnlisted() {
    this.category.unlisted = !this.category.unlisted;
  }

  @action
  async submit(form) {
    this.notifications.info('Sauvegarde des données en cours . . .');
      await form.save()
        .then(() => {
          this.notifications.clearAll().success('Partenaire modifié avec succès!', {
            autoClear: true
          });
        })
        .catch((e) => {
          this.notifications.clearAll().error(`<p>Une erreur est survenue lors de la sauvegarde :<br> <code class="text-white">${e.toString()}</code></p>`, {
            htmlContent: true
          });
        });
  }
}
