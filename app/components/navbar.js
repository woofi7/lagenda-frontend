import Component from '@glimmer/component';
import {inject as service} from "@ember/service";
import {alias} from "@ember/object/computed";
import {action} from "@ember/object";

export default class NavbarComponent extends Component {
  @service session;

  @alias('session.data.authenticated.user_info') profile;

  @action
  invalidateSession() {
    this.session.invalidate();
  }
}
