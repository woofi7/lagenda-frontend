import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default class AdminRoute extends Route.extend(ApplicationRouteMixin) {
  @service session;

  beforeModel(transition) {
    this.get('session').requireAuthentication(transition, 'login');
  }

  async sessionInvalidated() {
    this.get('session').handleInvalidation('login');
  }
}

