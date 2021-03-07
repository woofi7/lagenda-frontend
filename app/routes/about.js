import Route from '@ember/routing/route';
import {inject as service} from "@ember/service";

export default class AboutRoute extends Route {
  @service fastboot;

  async model() {
    return this.store.query('author', {
      include: 'image,social-links',
      sort: 'order',
      filter: 'equals(collaborator,\'true\')'
    })
  }

  beforeModel() {
    if (!this.fastboot.isFastBoot)
      document.getElementsByTagName('body')[0].classList.remove('dark');
  }
}
