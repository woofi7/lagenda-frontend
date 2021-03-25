import Controller from '@ember/controller';
import {action} from "@ember/object";
import {inject as service} from "@ember/service";
import {alias} from "@ember/object/computed";
import {computed} from "@ember/object";
import { A } from '@ember/array';
import {tracked} from "@glimmer/tracking";

export default class AdminArticleCategoryController extends Controller {
  @service router;

  @alias('model.articleCategories') categories;
  @alias('model.articleAuthorCategories') authorCategories;

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
  sortEndAction() {
    console.log('Sort Ended');
  }

  @action
  addCategory(category, list) {
    console.log(category)
    console.log(list)
  }

  @action
  sortEndAction2() {
    console.log('Sort Ended on second list');
  }
  @action
  sortEndAction3() {
    console.log('Sort Ended on third list');
  }
}
