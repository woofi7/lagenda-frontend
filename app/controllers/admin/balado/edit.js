import Controller from '@ember/controller';
import {alias} from "@ember/object/computed";
import {tracked} from "@glimmer/tracking";
import {action, computed} from "@ember/object";
import {inject as service} from "@ember/service";
import { isArray } from '@ember/array';

export default class AdminBaladoEditController extends Controller {
  @service router;
  @service fastboot;
  @service image;

  @alias('model.balado') balado;
  @alias('model.baladoPartners') baladoPartners;

  @tracked flatpickrRef = null;

  @computed('balado.image.url')
  get loadImageSize() {
    this.image.imageUrl = this.balado.get('image.url');
  }

  @computed('balado.id')
  get baladoUrl() {
    if (this.balado.baladoCategory.get('id')) {
      const host = this.fastboot.isFastBoot ? this.fastboot.request.host : window.location.host;

      return host + this.router.urlFor('balados.balado-partner.category.balado',
        this.balado.get('baladoCategory.partner.id'),
        this.balado.get('baladoCategory.id'),
        this.balado.id);
    }
  }

  @computed('baladoPartners.length', 'balado.baladoCategory')
  get selectableCategories() {
    return this.baladoPartners.map(function(cp) {
        return {
          groupName: cp.name,
          options: cp.categories.map(c => c)
        }
      });
  }

  @action
  selectCategory(c) {
    this.balado.set('baladoCategory', c);
  }

  @action
  closeModal() {
    this.router.transitionTo('admin');
  }

  @action
  toggleUnlisted() {
    this.balado.unlisted = !this.balado.unlisted;
  }

  @action
  changeImageSelected(image) {
    this.balado.image = image;
    this.image.imageUrl = image.url;
  }


  @action
  submit(form) {
    form.updateDatetime = new Date();
    form.postDatetime = isArray(form.postDatetime) ? form.postDatetime.firstObject : form.postDatetime;
    form.save()
      .then(() => {
        this.notifications.success('Balado modifié avec succès!', {
          autoClear: true
        });
      })
      .catch((e) => {
        this.notifications.error(`<p>Une erreur est survenue lors de la sauvegarde du balado :<br> <code class="text-white">${e.toString()}</code></p>`, {
          htmlContent: true
        });
      });
  }

}
