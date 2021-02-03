import Controller from '@ember/controller';
import {alias} from "@ember/object/computed";
import {computed} from "@ember/object";
import {inject as service} from "@ember/service";

export default class BaladosSuperCategoryCategoryController extends Controller {
  @alias('category') model;
  @service router;
  @service media;

  @computed('category.sortedBalados')
  get groupedEpisodes() {
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

    for (let i = 0; i < this.category.sortedBalados.length; i += cardNb) {
      groups.push(this.category.sortedBalados.slice(i, i + cardNb));
    }
    return groups;
  }
}
