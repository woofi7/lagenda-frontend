import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class SideMenuCategoryComponent extends Component {
  @tracked collapsed = false;

  @action
  toggleItems() {
    this.collapsed = !this.collapsed;
  }
}
