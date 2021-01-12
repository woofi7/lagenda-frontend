import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  setupController(controller, model, transition) {
    super.setupController(controller, model, transition);
    if (controller.infolettre)
      this.controllerFor('application').set('infolettre', controller.infolettre);
  }

  async model() {
    return this.store.findAll('article-category', {
      include: 'articles'
    });
  }
}

