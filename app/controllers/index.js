import Controller from '@ember/controller';
import Konami from 'konami';
import {inject as service} from "@ember/service";

export default class IndexController extends Controller {
  @service fastboot;

  queryParams = ['infolettre'];
  infolettre = null;

  init() {
    super.init();

    if (!this.fastboot.isFastBoot) {
      const easter_egg = new Konami(() => {
        document.getElementsByTagName('body')[0].classList.add('pink');
      });
    }
  }
}
