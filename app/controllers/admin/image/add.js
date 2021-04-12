import Controller from '@ember/controller';
import {action} from "@ember/object";
import {tracked} from "@glimmer/tracking";
import {inject as service} from "@ember/service";
import {alias} from "@ember/object/computed";
import {A} from '@ember/array';

export default class AdminImageAddController extends Controller {
  @service store;
  @service router;
  @service fastboot;

  @alias('session.data.authenticated.access_token') accessToken;

  @tracked uploadedImages = A();

  @action
  closeModal() {
    this.router.transitionTo('admin');
  }

  @action
  submit(form) {
    form.save()
      .then(() => {
        this.notifications.success('Image ajoutée avec succès!', {
          autoClear: true
        });
      })
      .catch((e) => {
        this.notifications.error(`<p>Une erreur est survenue lors de la sauvegarde de l'image :<br> <code class="text-white">${e.toString()}</code></p>`, {
          htmlContent: true
        });
      });
  }

  @action
  async uploadImage(file) {
    try {
      const host = this.fastboot.isFastBoot ? this.fastboot.request.host : window.location.host;
      console.log(this.namespace.API_HOST);
      let response = await file.upload('/api/v1/upload', {
        headers: { Authorization: "Bearer " + this.accessToken }
      }).then(response => {
        let image = this.store.createRecord('image');
        image.url = response.body.fileLink

        this.uploadedImages.addObject(image);
      });
    } catch (e) {
    }
  }
}
