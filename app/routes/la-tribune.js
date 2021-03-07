import Route from '@ember/routing/route';
import {inject as service} from "@ember/service";

export default class IndexRoute extends Route {
  @service fastboot;
  
  setupController(controller, model, transition) {
    super.setupController(controller, model, transition);
    if (controller.infolettre)
      this.controllerFor('application').set('infolettre', controller.infolettre);
  }

  async model() {
    return this.store.findAll('article-category', {
      include: 'articles.image,articles.article-category,image'
    });
  }

  beforeModel() {
    if (!this.fastboot.isFastBoot)
      document.getElementsByTagName('body')[0].classList.remove('dark');
  }
}

