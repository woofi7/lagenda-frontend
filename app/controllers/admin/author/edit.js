import Controller from '@ember/controller';
import {inject as service} from "@ember/service";
import {alias} from "@ember/object/computed";
import {action, computed} from "@ember/object";
import { tracked } from "@glimmer/tracking";
import {A} from '@ember/array';

export default class AdminAuthorEditController extends Controller {
  @service fastboot;
  @service router;
  @service image;

  @alias('model.author') author;

  @tracked removedLinks = A();

  @computed('author.image.url')
  get loadImageSize() {
    this.image.imageUrl = this.author.get('image.url');
    return null;
  }

  @action
  closeModal() {
    this.router.transitionTo('admin');
  }

  @action
  toggleCollaborator() {
    this.author.collaborator = !this.author.collaborator;
    if (this.author.collaborator)
      this.author.partner = false;
  }

  @action
  togglePartner() {
    this.author.partner = !this.author.partner;
    if (this.author.partner)
      this.author.collaborator = false;
  }

  @action
  async submit(form) {
    this.notifications.info('Sauvegarde des données en cours . . .');

    await this.author.socialLinks.map(s => s.save());
    await this.removedLinks.map(s => s.save());

    await form.save()
      .then(() => {
        this.notifications.clearAll().success('Auteur modifié avec succès!', {
          autoClear: true
        });
      })
      .catch((e) => {
        this.notifications.clearAll().error(`<p>Une erreur est survenue lors de la sauvegarde :<br> <code class="text-white">${e.toString()}</code></p>`, {
          htmlContent: true
        });
      });
  }

  @action
  async addSocialLink() {
    let sl = this.store.createRecord('social-link');
    sl.set('type', 'email');
    await sl.set('author', this.author);

    this.author.socialLinks.addObject(sl);
  }

  @action
  deleteSocialLink(socialLink) {
    this.author.socialLinks.removeObject(socialLink);
    this.removedLinks.addObject(socialLink);
    socialLink.deleteRecord();
  }
}
