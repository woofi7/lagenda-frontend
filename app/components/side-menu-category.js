import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class SideMenuCategoryComponent extends Component {
  @tracked collapsed = true;
  @tracked category;

  get articles() {
    return this.args.category.articles.slice(0, 5);
  }

  @action
  toggleItems() {
    this.collapsed = !this.collapsed;
  }
}
