import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class IndexRoute extends Route {
  @service('intl') intl;

  beforeModel() {
    return this.intl.setLocale(['fr-ca', 'en-us']);
  }

  async model() {
    let balados = await this.store.query('balado', {
      sort: '-post-datetime',
      page: {
        size: 1
      }
    });

    let articles = await this.store.query('article', {
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
            url: '/assets/images/balados-slider.jpg',
            alt: 'Microphone dans un studio d\'enregistrement.'
          },
        },
        {
          id: 2,
          route: 'about',
          title: 'À propos',
          desc: 'Qui diable est assez cinglé pour se lancer dans ce projet?',
          image: {
            url: '/assets/images/lagenda-2-slider.jpg',
            alt: 'Le parlement du Canada.'
          },
        },
        {
          id: 3,
          route: 'la-tribune',
          title: 'La tribune',
          desc: 'L’endroit pour vous informer et vous exprimer.',
          image: {
            url: '/assets/images/tribune-slider.jpg',
            alt: 'Bureau avec divers objets.'
          },
        },
        {
          id: 4,
          route: 'faq',
          title: 'L\'Agenda',
          desc: 'Créer la politique de demain.',
          image: {
            url: '/assets/images/lagenda-slider.jpg',
            alt: 'Château Frontenac à Québec.'
          },
        },
      ],
      articles,
      balados
    });
  }
}
