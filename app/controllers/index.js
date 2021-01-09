import Controller from '@ember/controller';

export default class IndexController extends Controller {
  queryParams = ['infolettre'];
  infolettre = null;

  init() {
    super.init();
  }
}
