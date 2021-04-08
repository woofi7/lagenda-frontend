import Controller from '@ember/controller';
import { alias } from "@ember/object/computed";
import {action, computed} from '@ember/object';
import {inject as service} from "@ember/service";

export default class AdminImageEditController extends Controller {
  @service router;
  @service image;

  @alias('model') imageModel;

  @action
  closeModal() {
    this.router.transitionTo('admin');
  }

  @computed('imageModel.url')
  get loadImageSize() {
    this.image.imageUrl = this.imageModel.get('url');
  }

  @action
  submit(form) {
    form.save()
      .then(() => {
        this.notifications.success('Image modifiée avec succès!', {
          autoClear: true
        });
      })
      .catch((e) => {
        this.notifications.error(`<p>Une erreur est survenue lors de la sauvegarde de l'image :<br> <code class="text-white">${e.toString()}</code></p>`, {
          htmlContent: true
        });
      });
  }
}
