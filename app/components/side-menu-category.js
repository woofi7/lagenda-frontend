import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import {sort} from "@ember/object/computed";

export default class SideMenuCategoryComponent extends Component {
  @tracked collapsed = true;
  @tracked category;

  @sort('args.category.articles', (a,b) => b.updateDatetime - a.updateDatetime) sortedArticles;

  get articles() {
    return this.sortedArticles.slice(0, 5);
  }

  @action
  toggleItems() {
    this.collapsed = !this.collapsed;
  }
}
