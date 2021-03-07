import Route from '@ember/routing/route';
import { inject as service } from "@ember/service";

export default Route.extend({
  intl: service(),
  fastboot: service(),

  beforeModel() {
    this.get('intl').setLocale(['fr-ca']);

    if (!this.fastboot.isFastBoot)
      document.getElementsByTagName('body')[0].classList.remove('dark');
  }
});
