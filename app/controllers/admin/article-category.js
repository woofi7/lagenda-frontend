import Controller from '@ember/controller';
import {action} from "@ember/object";
import {inject as service} from "@ember/service";
import {alias} from "@ember/object/computed";
import {computed} from "@ember/object";
import { A } from '@ember/array';
import { tracked } from "@glimmer/tracking";


export default class AdminArticleCategoryController extends Controller {
  @service router;

  @alias('model.articleCategories') categories;
  @alias('model.articleAuthorCategories') authorCategories;

  @tracked canSave = false;

  @computed('categories')
  get sortableObjectList() {
    return A(this.categories.map(c => c));
  }

  @computed('authorCategories')
  get sortableObjectList2() {
    return A(this.authorCategories.map(c => c));
  }

  @action
  closeModal() {
    this.router.transitionTo('admin');
  }

  @action
  dragEndAction() {
    this.canSave = true;
  }

  @action
  async save() {
    this.notifications.info('Sauvegarde des données en cours . . .');
    try {
      for (let i = 0; i < this.sortableObjectList.length; i++) {
        let c = this.sortableObjectList.get(i);
        let order = i * 10;

        if (i > 3)
          order += 70;

        c.set('order', order);
        c.set('isPartner', false);
        await c.save();
      }
      for (let i = 0; i < this.sortableObjectList2.length; i++) {
        let c = this.sortableObjectList2.get(i);
        let order = i * 10;

        if (i > 3)
          order += 70;

        c.set('order', order);
        c.set('isPartner', true);
        await c.save();
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
