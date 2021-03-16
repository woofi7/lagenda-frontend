import Controller from '@ember/controller';
import { alias } from "@ember/object/computed";
import { action, computed } from '@ember/object';
import {inject as service} from "@ember/service";
import { tracked } from "@glimmer/tracking";
import {keepLatestTask} from "ember-concurrency-decorators";

export default class AdminImageEditController extends Controller {
  @alias('model') image;
  @service router;

  @tracked alertMessage = null;
  @tracked alertType = null;
  @tracked imageSize = null;

  @computed('image.url')
  get imageUrl() {
    this.fetchImageData.perform();
    return this.image.url;
  }

  @action
  closeModal() {
    this.alertMessage = null;
    this.alertType = null;

    this.router.transitionTo('admin');
  }

  @action
  async uploadImage(file) {
    try {
      file.readAsDataURL().then(function (url) {
        this.image.url = url;
      });

      let response = await file.upload('http://localhost:5000/api/v1/upload');
      this.image.url = response.headers.Location;
      //await this.image.save();
    } catch (e) {
      this.image.rollback();
    }
  }

  @action
  submit(form) {
    debugger;
    form.save()
      .then(() => {
        this.alertType = 'success';
        this.alertMessage = 'Image modifiée avec succès!';
      })
      .catch((e) => {
        this.alertType = 'danger';
        this.alertMessage = 'Une erreur est survenue lors de la sauvegarde de l\'image : ' + e.toString();
      });
  }

  @keepLatestTask *fetchImageData() {
    let img = new Image();
    img.onload = yield () => {
      const gcd = this.gcd(img.width, img.height);
      const ratio = img.width / gcd + ":" + img.height / gcd;

      this.set('imageSize', {width: img.width, height: img.height, ratio });

    };
    img.src = this.image.url;
  }

  gcd (a, b) {
    return (b == 0) ? a : this.gcd (b, a%b);
  }
}
