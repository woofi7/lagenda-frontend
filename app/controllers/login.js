import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class LoginController extends Controller {
  @tracked errorMessage;
  @service session;
  @service router;

  queryParams = ['disconnected']

  disconnected = false;

  @action
  async authenticate(e) {
    e.preventDefault();
    try {
      await this.session.authenticate('authenticator:torii', 'google');
    } catch(error) {
      this.errorMessage = error.error || error;
    }

    if (this.session.isAuthenticated) {
      this.router.transitionTo('admin');
    }
  }

  @action
  updateIdentification(e) {
    this.identification = e.target.value;
  }

  @action
  updatePassword(e) {
    this.password = e.target.value;
  }
}
