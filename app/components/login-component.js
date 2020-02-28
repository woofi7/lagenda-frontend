import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LoginComponentComponent extends Component {
  @service session;

  @action
  async authenticate() {
    const { username, password } = this;
    const credentials = { username, password };
    try {
      await this.session.authenticate('authenticator:cognito', credentials);
    } catch (error) {
      this.set('errorMessage', error.message || error);
    }
  }
}

