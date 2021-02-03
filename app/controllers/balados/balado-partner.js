import Controller from '@ember/controller';
import {alias} from "@ember/object/computed";
import {computed} from "@ember/object";
import {inject as service} from "@ember/service";

export default class BaladosSuperCategoryController extends Controller {
  @alias('model.categories') categories;
  @service media;

  @computed('categories')
  get groupedCategories() {
    let groups = [];

    let cardNb;
    if (this.media.xl) {
      cardNb = 4;
    }
    else if(this.media.lg) {
      cardNb = 3;
    }
    else if(this.media.md) {
      cardNb = 2;
    }
    else {
      cardNb = 1;
    }

    for (let i = 0; i < this.categories.length; i += cardNb) {
      groups.push(this.categories.slice(i, i + cardNb));
    }

    return groups;
  }
}
