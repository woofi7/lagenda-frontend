import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AdminLoginRoute extends Route {
  @service session;
  @service fastboot;

  beforeModel() {
    this.get('session').prohibitAuthentication('admin');


    if (!this.fastboot.isFastBoot)
      document.getElementsByTagName('body')[0].classList.add('dark');
  }
}
