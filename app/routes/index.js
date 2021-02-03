import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class IndexRoute extends Route {
  setupController(controller, model, transition) {
    super.setupController(controller, model, transition);
    if (controller.infolettre)
      this.controllerFor('application').set('infolettre', controller.infolettre);
  }

  async model() {
    let balados = await this.store.query('balado', {
      include: 'balado-category.partner,image',
      sort: '-post-datetime',
      page: {
        size: 1
      }
    });
    let articles = await this.store.query('article', {
      include: 'article-category.image,image',
      sort: '-post-datetime',
      page: {
        size: 3
      }
    });

    return RSVP.hash({
      carouselItems: [
        {
          id: 1,
          route: 'balados.list',
          title: 'Le balado',
          desc: 'Pour des analyses détaillées.',
          image: {
            url: 'https://files.lagenda.ca/images/balados-slider.jpg',
            alt: 'Microphone dans un studio d\'enregistrement.'
          },
        },
        {
          id: 2,
          route: 'about',
          title: 'À propos',
          desc: 'Qui diable est assez cinglé pour se lancer dans ce projet?',
          image: {
            url: 'https://files.lagenda.ca/images/lagenda-2-slider.jpg',
            alt: 'Le parlement du Canada.'
          },
        },
        {
          id: 3,
          route: 'la-tribune',
          title: 'La tribune',
          desc: 'L’endroit pour vous informer et vous exprimer.',
          image: {
            url: 'https://files.lagenda.ca/images/tribune-slider.jpg',
            alt: 'Bureau avec divers objets.'
          },
        },
        {
          id: 4,
          route: 'faq',
          title: 'L\'Agenda',
          desc: 'Explorer les idées de demain',
          image: {
            url: 'https://files.lagenda.ca/images/lagenda-slider.jpg',
            alt: 'Château Frontenac à Québec.'
          },
        },
      ],
      articles,
      balados
    });
  }
}
