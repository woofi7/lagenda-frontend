import Controller from '@ember/controller';
import {inject as service} from "@ember/service";

export default class IndexController extends Controller {
  queryParams = ['infolettre'];
  infolettre = null;

  init() {
    super.init();
  }
}
