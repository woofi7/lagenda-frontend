import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class SideMenuComponent extends Component {
  @service screen;

  @tracked collapsed = true;

  @action
  toggleItems() {
    this.collapsed = !this.collapsed;
  }
}
