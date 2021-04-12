import Controller from '@ember/controller';
import {inject as service} from "@ember/service";
import {tracked} from "@glimmer/tracking";
import {sort} from "@ember/object/computed";
import {action, computed} from "@ember/object";
import {A} from "@ember/array";

export default class AdminAuthorListController extends Controller {
  @service router;

  @tracked canSave = false;

  sortKey = ['order:asc'];
  @sort('model.authors', 'sortKey') authors;

  @computed('authors.length')
  get sortableAuthorsList() {
    return A(this.authors.map(c => c));
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
      for (let i = 0; i < this.sortableAuthorsList.length; i++) {
        let p = this.sortableAuthorsList.get(i);
        p.set('order', i * 10);
        await p.save();
      }

      this.notifications.clearAll().success('Auteurs modifiées avec succès!', {
        autoClear: true
      });
    } catch (e) {
      this.notifications.clearAll().error(`<p>Une erreur est survenue lors de la sauvegarde :<br> <code class="text-white">${e.toString()}</code></p>`, {
        htmlContent: true
      });
    }
  }
}
