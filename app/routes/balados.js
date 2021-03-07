import Route from '@ember/routing/route';
import {inject as service} from "@ember/service";

export default Route.extend({
  fastboot: service(),

  beforeModel() {
    if (!this.fastboot.isFastBoot)
      document.getElementsByTagName('body')[0].classList.remove('dark');
  }
});
